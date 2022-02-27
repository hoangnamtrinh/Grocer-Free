const express = require("express");
const app = express();
const woolies = require('./wooliesData.json')
const normal = require('./routes/normal')

app.use(express.json())

app.get('/', (req, res) => {
  res.json(woolies);
})

app.use('/api/normal', normal)

app.listen(5000, () => {
  console.log("listen on port 5000");
})

