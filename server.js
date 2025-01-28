const express = require("express");
const cors = require("cors");
const mysqol = require("mysql2");

const app = express();
const PORT = 3000;

//middleware
app.use(cors());
