const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const contactForms = require("./routers/contactForms");

dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
app.use(cors);
app.use(express.json());
app.use(logging);

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.use("/contactForms", contactForms);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
