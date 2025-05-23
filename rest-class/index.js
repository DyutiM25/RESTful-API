const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {   
        id:uuidv4(),
        username: "DyutiMengji",
        content: "I will become better at this!"
    },
    {
        id:uuidv4(),
        username: "DhanushMengji",
        content: "I love doing this!"
    },
    {   
        id:uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content})
    res.redirect("/posts"); //by default get request
});

app.get("/posts/:id", (req, res)=>{
    let {id} = req.params;
    console.log(id);

    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});