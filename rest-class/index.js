const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username: "DyutiMengji",
        content: "I will become better at this!"
    },
    {
        username: "DhanushMengji",
        content: "I love doing this!"
    },
    {
        username: "SrilathIndurthi",
        content: "We will achieve this!"
    }
];

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res)=>{
    res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
    // console.log(req.body);
    let {username, content} = req.body;
    posts.push({username, content})
    res.send("post request working");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});