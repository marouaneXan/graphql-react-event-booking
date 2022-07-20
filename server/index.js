const express = require("express");
const bodyParser = require("body-parser");
const schema=require('./schema/schema')
const { graphqlHTTP } = require("express-graphql");
require('dotenv').config();
const connectDB = require('./config/db')
const app = express();
connectDB()
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql:true
  }),
);
app.listen(PORT, () => console.log("Server running at the PORT " + PORT));
