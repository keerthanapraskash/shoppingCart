const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes");
app.use("/v1/", routes);

app.all("*", (req, res) => {
  res.send("API Request Not Valid. Please check Again.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
