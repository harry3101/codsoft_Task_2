const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xftvubc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Create db
    const db = client.db("mernJobPortal");
    const jobsCollection = db.collection("demoJobs");

    // Post a job
    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date();
        const result = await jobsCollection.insertOne(body);
        if (result.insertedId) {
          res.status(200).send(result);
        } else {
          res.status(500).send({
            message: "Cannot insert! Try again later.",
            status: false
          });
        }
      } catch (error) {
        res.status(500).send({
          message: "Internal server error",
          status: false,
          error: error.message
        });
      }
    });

    // Get all jobs
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobsCollection.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        res.status(500).send({
          message: "Internal server error",
          status: false,
          error: error.message
        });
      }
    });

    // Get a single job using id
    app.get("/all-jobs",async(req, res) =>{
      const id = req.params.id;
      const job = await jobsCollection.findOne({
        _id: new ObjectId(id)
      })
      res.send(job) 
    })

    // Get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const jobs = await jobsCollection.find({ postedBy: email }).toArray();
        res.send(jobs);
      } catch (error) {
        res.status(500).send({
          message: "Internal server error",
          status: false,
          error: error.message
        });
      }
    });

    // Delete a job
    app.delete("/job/:id", async (req, res) => {
      try {
        const id = req.params.id;
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ message: "Invalid job ID", status: false });
        }
        const filter = { _id: new ObjectId(id) };
        const result = await jobsCollection.deleteOne(filter);
        if (result.deletedCount === 1) {
          res.send({ message: "Job deleted successfully!", status: true });
        } else {
          res.status(404).send({ message: "Job not found!", status: false });
        }
      } catch (error) {
        res.status(500).send({
          message: "Internal server error",
          status: false,
          error: error.message
        });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
  // Keep the connection open while the server is running
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Developer');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
