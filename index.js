// import express from "express";
const express = require("express");

const app = express();
const port = 3000;



app.post("/user/signup", function( req, res) {
    res.json({
        message  :"signup endpoint"
    });
});

app.post("/user/signin", function(req ,res) {
    res.json({
        message : "this signin endpoint"
    });
});

app.post("/user/perchese", function(req ,res) {
    res.json({
        message : "this the perchse endpoint"
    });
});


app.get("/user/courses",function(req,res) {
    res.json({
        message  : "this the couse end point"
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});