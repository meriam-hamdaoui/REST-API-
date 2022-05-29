require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/connectDB");

//import local modules
const { listener } = require("./controllers/errorMsg");
const contactRouter = require("./routes/contact");

const app = express();

app.use(cors());

app.use(express.json());

//app.use(routes)
app.use("/api/phonebook", contactRouter);

//connect DB
connectDB();

//start the server
const PORT = process.env.PORT || process.env.port;
app.listen(PORT, (err) => listener(err, PORT));
