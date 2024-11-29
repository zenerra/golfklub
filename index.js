import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

connection.connect();


import routeUgyfel from "./routes/ugyfel.js";
import routeJelenlet from "./routes/jelenlet.js";
import routeTagsag from "./routes/tagsag.js";
import routeBefizetesek from "./routes/befizetesek.js";

app.use("/golf/ugyfel", routeUgyfel);
app.use("/golf/jelenlet", routeJelenlet);
app.use("/golf/tagsag", routeTagsag);
app.use("/golf/befizetesek", routeBefizetesek);
app.use("", (req, res) => {
    res.status(404).send("Nincs ilyen lap!");
});

app.listen(3000, ()=> {
    console.log("listening on port 3000");
});