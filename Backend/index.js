const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/register", (req, res) =>{
    let {user, passward} = req.query;
    res.send(`stanard GET response. welcome ${user}`);
});

app.post("/register", (req, res) =>{
    let {user, passward} = req.body;
    res.send(`stanard POST response. welcome ${user}`);
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`)
});