const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
//middlewares
app.use(express.json());
app.use(cors());

app.set('view engine', 'hbs');
app.use(express.static('./public'));


app.use('/images', express.static('./images'));
app.use('/threeDFiles', express.static('./threeDFiles'));
app.use('/files', express.static('./files'));

// routers require
const projects = require("./Routes/project.route");
const quotes = require("./Routes/quote.route");
const users = require("./Routes/user.route");
const material = require("./Routes/material.route");
const feedback = require("./Routes/feedback.route");


const uniqueSuffix = Math.round(Math.random() * 1E5) + '-' + Math.round(Math.random() * 1E5)



// default route 

app.get("/", (req, res) => {
    res.send("Server is working! YaY!");
});

// routes ------------------------
app.use("/api/v1/projects", projects);
app.use("/api/v1/quotes", quotes);
app.use("/api/v1/users", users);
app.use("/api/v1/material", material);
app.use("/api/v1/feedback", feedback);

app.use("*", (req, res, nex) => {
    res.status(404).render('notFound.hbs')
})

module.exports = app;