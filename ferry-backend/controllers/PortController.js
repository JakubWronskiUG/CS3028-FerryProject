import Port from '../models/Port.js';

const getPorts = async (req, res) => {
    const ports = await Port.find({});
    console.log(ports);
    res.status(200).send(ports);
}

export default getPorts;