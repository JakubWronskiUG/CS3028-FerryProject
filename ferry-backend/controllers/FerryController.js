import Ferry from '../models/Ferry.js';

const getFerries = async (req, res) => {
    const ferries = await Ferry.find({});
    console.log(ferries);
    res.status(200).send(ferries);
}

export default getFerries;