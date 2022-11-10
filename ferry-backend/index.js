import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import getTrips from './controllers/TripController.js';
import cors from 'cors';
import './loadenv.js';

// const PORT = 5000;
// const DB_URL = 'mongodb+srv://user:user@cluster0.qlxmvjb.mongodb.net/?retryWrites=true&w=majority';

const app = express();
// app.use(cors());
app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/api', router);


async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(process.env.PORT, () => console.log('Server started on port ' + process.env.PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();