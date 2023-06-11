const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectdb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const app = express();
connectdb();
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/api/users',require('./routes/usersRoutes'));
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use(errorHandler);


app.listen(port)