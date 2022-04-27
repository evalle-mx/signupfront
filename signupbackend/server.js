const express = require('express');

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const routesUrls = require('./routes/routes')


const PORT = process.env.SERVER_PORT;

mongoose.connect(process.env.MONGO_URI, () => console.log('MongoDBAtlas is connected'))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => { console.log(`Server is up and running at port ${PORT}`);})

