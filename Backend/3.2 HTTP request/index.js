import express from "express";
var port = 8000;
const app= express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello<h1>");
});
app.get("/about",(req,res)=>{
    res.send("my name is nitesh kumar");
});

app.listen(port,()=>{
console.log(`server is running ${port}`);
});