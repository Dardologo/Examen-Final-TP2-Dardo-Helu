const express = require("express");
const app = express();
const appStatus = require("./src/routes/routes");

app.use("/", appStatus);

app.listen(3000, () => {
  console.log("Servidor web escuchando en el puerto 3000");
});
