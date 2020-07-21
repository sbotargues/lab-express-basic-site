const express = require("express");

const app = express();

// le decimos a express que sirva los archivos estáticos desde esta carpeta public
app.use(express.static("public"));

app.get("/", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/home-page.html')
});

app.get("/PhotoGallery", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/PhotoGallery.html');
});

app.get("/Works", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/Works.html');
});

app.get("/About", (request, response, next) => {
  response.status(200).sendFile(__dirname + '/views/About.html');
});

const port = 3000;

app.listen(3000, () => {
  console.log(`App listening on port ${port}`);
});
