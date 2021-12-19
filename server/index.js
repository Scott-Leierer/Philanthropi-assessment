const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

app.post("/post", (req, res) => {
  setTimeout(() => {
    res.end(JSON.stringify(req.body));
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});