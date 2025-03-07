const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 9001

const app = express()
const corsoptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200
};


app.use(cors(corsoptions))
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wwse58h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

const menuCollection = client.db("dibugAndDine").collection("menu");
const reviewCollection = client.db("dibugAndDine").collection("reviews");

app.get('/menu', async (req, res) => {
    const result = await menuCollection.find().toArray();
    res.send(result);
})

app.get('/', (req, res) => {
    res.send("hello from Debug And Dine server..!!");
})



app.listen(port, () =>
    console.log(`server running port on ${port}`))