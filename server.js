const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/helloworld", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => console.log("Server running on port 4000"));
