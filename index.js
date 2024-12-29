// const express = require('express');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/save",(req,res)=>{
//     const url ="mongodb+srv://swapnilryadav168:dcuQVcFH1HkgYQB3@ss28dec24.18qzj.mongodb.net/?retryWrites=true&w=majority&appName=ss28dec24";
//     const client = new MongoClient(url);
//     const db=client=client.db("ss28dec24");
//     const coll = db.collection("student");
//     const doc={"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg}
//     coll.insertOne(doc)
//     .then(result=>res.send(result))
//     .catch(error=>res.send(error));
// });
// app.listen(9000,()=>{
//     console.log("Server is running on port 9000");  // server is running on port 9000
// });
// const express = require("express");
// const cors = require("cors");
// const { MongoClient } = require("mongodb");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/save", (req, res) => {
//     const url = "mongodb://0.0.0.0:27017";
//     const client = new MongoClient(url);
//     const db = client.db("mydb");
//     const coll = db.collection("student");
//     const doc = {"name": req.body.name, "company": req.body.company, "pkg": req.body.pkg};
//     coll.insertOne(doc)
//     .then(result => res.send(result))
//     .catch(error => res.send(error)); 
// });

// app.listen(9999, () => { console.log("ready to serve at port 9999");});

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

// Use your MongoDB Atlas connection string
const url = "mongodb+srv://swapnilryadav168:ePgqqYVy9BDb37m9@ss28dec2024.oxgyo.mongodb.net/?retryWrites=true&w=majority&appName=ss28dec2024";
const client = new MongoClient(url);

app.post("/save", async (req, res) => {
    try {
        await client.connect(); // Connect to MongoDB Atlas
        const db = client.db("mydb"); // Use database "mydb" (adjust if needed)
        const coll = db.collection("student"); // Use collection "student"

        const doc = {
            name: req.body.name,
            company: req.body.company,
            pkg: req.body.pkg,
        };

        const result = await coll.insertOne(doc); // Insert the document
        res.status(200).send(result); // Send success response
    } catch (error) {
        res.status(500).send({ error: "Failed to save data", details: error });
    } finally {
        await client.close(); // Close the client connection
    }
});

app.listen(9999, () => {
    console.log("Server is ready to serve at port 9999");
});
