const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};
app.use(express.json());
app.use(logging);

app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

app.get("/users/:id", (request, response) => {
  // express adds a "params" Object to requests
  const id = request.params.id;
  // handle GET request for post with an id of "id"
  response.send(JSON.stringify({ user_id: id }));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
