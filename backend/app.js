const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const dbConnection = require("./connection/mongodb");
const adminrouter = require("./routes/adminRoute");

dbConnection();

app.use("/", express.static(path.join(__dirname, "public")));

app.use(
    cors({
       origin: "https://task-manager-frontend-ocfr.onrender.com",
        methods: ["GET", "POST", "DELETE", "PUT"], 
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", adminrouter); 

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server Listening on ${Port}...`);
});
