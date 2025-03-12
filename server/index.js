const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 9001;
const app = express();

const corsoptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsoptions));
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wwse58h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

const userCollection = client.db("dibugAndDine").collection("users");
const menuCollection = client.db("dibugAndDine").collection("menu");
const reviewCollection = client.db("dibugAndDine").collection("reviews");
const cartCollection = client.db("dibugAndDine").collection("carts");

// Routes

// jwt
app.post('/jwt', async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.send({ token });
})

// middlewares 
const verifyToken = (req, res, next) => {
    console.log('inside verify token', req.headers.authorization);
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'unauthorized access' });
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized access' })
        }
        req.decoded = decoded;
        next();
    })
}

// use verify admin after verifyToken
const verifyAdmin = async (req, res, next) => {
    const email = req.decoded.email;
    const query = { email: email };
    const user = await userCollection.findOne(query);
    const isAdmin = user?.role === 'admin';
    if (!isAdmin) {
        return res.status(403).send({ message: 'forbidden access' });
    }
    next();
}

// get
app.get('/menu', async (req, res) => {
    const result = await menuCollection.find().toArray();
    res.send(result);
});

app.get('/menu/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await menuCollection.findOne(query);
    res.send(result);
})

app.get('/reviews', async (req, res) => {
    const result = await reviewCollection.find().toArray();
    res.send(result);
});

app.get('/carts', async (req, res) => {
    const email = req.query.email;
    const query = { email: email };
    const result = await cartCollection.find(query).toArray();
    res.send(result);
});

app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
    // console.log(req.headers)
    const result = await userCollection.find().toArray();
    res.send(result);
})

app.get('/users/admin/:email', verifyToken, async (req, res) => {
    const email = req.params.email;

    if (email !== req.decoded.email) {
        return res.status(403).send({ message: 'forbidden access' })
    }

    const query = { email: email };
    const user = await userCollection.findOne(query);
    let admin = false;
    if (user) {
        admin = user?.role === 'admin';
    }
    res.send({ admin });
})

app.get('/', (req, res) => {
    res.send("Hello from Debug And Dine server..!!");
});

//post
app.post('/carts', async (req, res) => {
    const cartItem = req.body;
    const result = await cartCollection.insertOne(cartItem);
    res.send(result);
})

app.post('/users', async (req, res) => {
    const user = req.body;
    // insert email if user doesn't exist
    const query = { email: user.email }
    const existingUser = await userCollection.findOne(query);
    if (existingUser) {
        return res.send({ message: 'user already exists', insertedId: null })
    }
    const result = await userCollection.insertOne(user);
    res.send(result);
})

app.post('/menu', verifyToken, verifyAdmin, async (req, res) => {
    const item = req.body;
    const result = await menuCollection.insertOne(item);
    res.send(result);
});

// deleted
app.delete('/carts/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await cartCollection.deleteOne(query);
    res.send(result)
})

// app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
//     const id = req.params.id;
//     console.log("Deleting item with ID:", id);
//     const query = { _id: new ObjectId(id) }
//     const result = await menuCollection.deleteOne(query);
//     console.log("Delete result:", result);
//     if (result.deletedCount > 0) {
//         res.send(result);
//     } else {
//         res.status(404).send({ message: "Item not found" });
//     }
// });

app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
    const id = req.params.id;
    console.log("Received ID:", id);
    const query = { _id: new ObjectId(id) };
    const result = await menuCollection.deleteOne(query);
    res.send(result);
});


app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await menuCollection.deleteOne(query);
    res.send(result);
})


// patch
app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = {
        $set: {
            role: 'admin'
        }
    }
    const result = await userCollection.updateOne(filter, updatedDoc);
    res.send(result);
})

app.patch('/menu/:id', async (req, res) => {
    const item = req.body;
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: {
            name: item.name,
            category: item.category,
            price: item.price,
            recipe: item.recipe,
            image: item.image
        }
    }

    const result = await menuCollection.updateOne(filter, updatedDoc)
    res.send(result);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});