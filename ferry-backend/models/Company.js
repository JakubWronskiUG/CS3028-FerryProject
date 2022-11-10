import { Schema, model } from "mongoose";

const companySchema = new Schema( {
    companyId: {type: Number, required: true},
    companyName: {type: String, required: true},
    companyHomeURL: {type: String, required: true},
    companyTicketsURL: {type: String, required: true},
});

const Company = model('Company', companySchema);

export default Company;