const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const dbName = "mobile";
const client = new MongoClient(url);

const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db(dbName);
  return db.collection("goods");
}
module.exports = dbConnect;
