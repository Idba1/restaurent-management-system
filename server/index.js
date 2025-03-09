const express = require('express');
const cors = require('cors');
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
// get
app.get('/menu', async (req, res) => {
    const result = await menuCollection.find().toArray();
    res.send(result);
});

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
    const result = await userCollection.insertOne(user);
    res.send(result);
})


// deleted
app.delete('/carts/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await cartCollection.deleteOne(query);
    res.send(result)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});