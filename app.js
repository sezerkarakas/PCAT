const express = require('express');
const path = require("path")

const app = express();


//MIDDLEWARES
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "temp/index.html"))
});

app.get('/help', (req, res) => {
  res.send();
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
