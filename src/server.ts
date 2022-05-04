
require("dotenv").config()

import { Express, json, Application } from "express"

const session = require("express-session");
const express = require("express");

const app:Application = express()
const port = process.env.PORT || 5000

app.use(express.json())



app.listen(port, () => console.log("Server is runnning on port " + port));
