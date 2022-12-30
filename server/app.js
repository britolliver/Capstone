const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pizzas = require("./routers/pizzas");

dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
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

app.get("/users/:id", (request, response) => {
  // express adds a "params" Object to requests
  const id = request.params.id;
  // handle GET request for post with an id of "id"
  response.send(JSON.stringify({ user_id: id }));
});

app.use("/pizzas", pizzas);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
