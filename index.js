const express = require("express");
const {userModel} = require("./db");
const app = express();
const port = 3000;

hello.js


app.use("/user/api",userModel);
// Middleware
app.use(express.json());

// User signup
app.get("/", function (req, res) {
    return res.json({
        message: "User home up successfully"
    });
});
app.post("/user/signup", function (req, res) {
    return res.json({
        message: "User signed up successfully"
    });
});

// User signin
app.post("/user/signin", function (req, res) {
    return res.json({
        message: "User signed in successfully"
    });
});

// Get user purchases
app.get("/user/purchases", function (req, res) {
    return res.json({
        message: "User purchases fetched successfully"
    });
});

// Purchase a course
app.post("/course/purchase", function (req, res) {
    return res.json({
        message: "Course purchased successfully"
    });
});

// Get all courses
app.get("/courses", function (req, res) {
    return res.json({
        message: "Courses fetched successfully"
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});