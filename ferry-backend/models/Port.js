import { Schema, model } from "mongoose";

const portSchema = new Schema( {
    portId: {type: Number, required: true},
    portName: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
});

const Port = model('Port', portSchema);

export default Port;