const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const accountsRouter = require ('./routes/accounts');
const usersRouter = require ('./routes/users');
const accountRouter = require ('./routes/accountsTypes');

app.use('/accounts', accountsRouter);
app.use('/users', usersRouter);
app.use('/accountsTypes', accountRouter);


app.listen(port, () =>{

    console.log(`Server is running on port: ${port}`);
});