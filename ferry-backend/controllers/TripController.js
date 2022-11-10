import Trip from '../models/Trip.js';
import TripService from '../services/TripService.js';

class TripController {
    async create(req, res) {
        try {
            const trip = await TripService.create(req.body);
            res.json(trip);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const trips = await TripService.getAll();
            return res.json(trips);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOneById(req, res) {
        try {
            const trip = await TripService.getOneById(req.params.id);
            return res.json(trip);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getByPortFromId(req, res) {
        try {
            const trip = await TripService.getByPortFromId(req.params.portFromId);
            return res.json(trip);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getByPortToId(req, res) {
        try {
            const trip = await TripService.getByPortToId(req.params.portToId);
            return res.json(trip);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedTrip = await TripService.update(req.body);
            return res.json(updatedTrip);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const trip = await TripService.delete(req.params.id);
            return res.json(trip);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new TripController();