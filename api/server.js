const express = require('express');
// const cors = require('cors');
const app = express();
const router = require('./routes/breweriesRoutes');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
// app.use(cors());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`);
});