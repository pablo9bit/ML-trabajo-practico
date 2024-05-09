const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");

const app = express();
const PORT = 1234;

app.use(cors());
app.disable("x-powered-by");
app.use(express.json());
app.use("/api/items", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});
