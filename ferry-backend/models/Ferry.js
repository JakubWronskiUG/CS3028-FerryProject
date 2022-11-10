import { Schema, model } from "mongoose";

const ferrySchema = new Schema( {
    ferryId: {type: Number, required: true},
    companyId: {type: Number, required: true},
    humanCapacity: {type: Number, required: true},
    carCapacity: {type: Number, required: true},
    isAccessible: {type: Boolean, required: true},
    ferryName: {type: String, required: true},
});

const Ferry = model('Ferry', ferrySchema);

export default Ferry;