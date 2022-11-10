import { Schema, model } from "mongoose";

const tripSchema = new Schema( {
    ferryId: {type: Number, required: true},
    portFromId: {type: Number, required: true},
    portToId: {type: Number, required: true},
    tripDate: {type: Date, required: true},
    hourStart: {type: Number, required: true},
    hourEnd: {type: Number, required: true},
});

const Trip = model('Trip', tripSchema);

export default Trip;