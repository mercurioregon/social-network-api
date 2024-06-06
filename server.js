const express = require('express');
const mongoose = require("mongoose");
const db = require('./config/connection');
const router = require('./models/api');

// const { } = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router)
mongoose.connect("mongodb://localhost:27017/socialnetwork")
app.listen(PORT, ()=>{
    console.log("server started")
});