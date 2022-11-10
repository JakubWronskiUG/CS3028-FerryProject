import Trip from '../models/Trip.js';

class TripService {
    async create(trip) {
        const createdTrip = await Trip.create(trip);
        return createdTrip;
    }

    async getAll() {
        const trips = await Trip.find();
        return trips;
    }

    async getOneById(id) {
        if (!id) {
            throw new Error('Id not specified');
        }
        const trip = await Trip.findById(id);
        return trip;
}

    async getByPortFromId(portFromId) {
        if (!portFromId) {
            throw new Error('PortFromId not specified');
        }
        const trip = await Trip.find({ portFromId: portFromId });
        return trip;
    }

    async getByPortToId(portToId) {
        if (!portToId) {
            throw new Error('PortToId not specified');
        }
        const trip = await Trip.find({ portToId: portToId });
        return trip;
    }

    async update(trip) {
        if (!trip._id) {
            throw new Error('Id not specified');
        }
        const updatedTrip = await Trip.findByIdAndUpdate(trip._id, trip, {new: true});
        return updatedTrip;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id not specified');
        }
        const trip = await Trip.findByIdAndDelete(id);
        return trip;
    }
}

export default new TripService();