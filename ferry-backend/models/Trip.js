import { Schema, model } from "mongoose";

const tripSchema = new Schema( {
    ferryId: {type: Number, required: true},
    portFromId: {type: String, required: true},
    portToId: {type: String, required: true},
    tripDate: {type: Date, required: true},
    hourStart: {type: Number, required: true},
    hourEnd: {type: Number, required: true},
});

const Trip = model('Trip', tripSchema);

export default Trip;