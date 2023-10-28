import express from "express";
var port = 8000;
const app=express();


app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});