// const express = require("express"); we are using type module
import express from "express"
const app = express();
const PORT = 8000;

import urlRouter from "./routes/urlRouter.js"
import { connectDB } from "./mongodbConnection.js";

app.use(express.json())

connectDB();

app.get("/",(req,res)=>{
    res.send("Hey form server")
})

app.use('/url',urlRouter);

app.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);
})