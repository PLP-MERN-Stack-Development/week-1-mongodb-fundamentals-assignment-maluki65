const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/plp_bookstore"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore"); 
    const collection = db.collection("books");

    const fictionBooks = await collection.find({ genre: "Fiction" }).toArray();
    console.log("Fiction books:", fictionBooks);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
