import Company from '../models/Company.js';

const getCompany = async (req, res) => {
    const company = await Company.find({});
    console.log(companies);
    res.status(200).send(companies);
}

export default getCompany;