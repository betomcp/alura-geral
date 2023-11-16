import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura-class-db:Alura123@cluster0.nzlfjej.mongodb.net/alura-node-one");

const db = mongoose.connection;

export default db;