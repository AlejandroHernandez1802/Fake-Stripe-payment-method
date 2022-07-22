const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

//Routes implementation
const stripeRoute = require('./routes/stripe');

//dotenv config
dotenv.config();

//Server creation
const app = express();

//Database implementation
mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log("Connected to the database")})
.catch(err => {console.log("Failed to connect to the database: "+err)})

//Middelwares implementation
app.use(express.json());
app.use(cors());

//Routes implementation
app.use("/api/order", stripeRoute)

//Putting on the server
const port = process.env.PORT;
app.listen(port || 3001, () => {
    console.log(`Server listening on port ${port}`);
})

