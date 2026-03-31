import express from "express";
import connectDB from "./db/connectDB.js";
import movieModel from "./models/movies.js";
import productModel from "./models/Product.js";

const app = express(); //Creating a server app with express
const port = process.env.PORT || 8000; //run on a server or port 8000
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies'; //if .env has DATABASE_URL, use it else use local mongodb

connectDB(DATABASE_URL); //connecting mongoose to mongodb

app.listen(port, () => console.log(`Server listening on port ${port}`)); // Starts the express server
