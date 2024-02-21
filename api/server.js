const express = require('express');
const app = express();
const router = require('./routes/breweriesRoutes');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
// const breweriesRoutes = requiere('../routes/breweriesRoutes.js');

app.use(express.json());
app.use(morgan("dev"));

app.use(router);

//Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`);
});