const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Enable parsing of JSON requests

mongoose.connect('mongodb://localhost:27017/stationData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

const stationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    slotsAvailable: { type: Number, required: true },
    status: { type: String, enum: ['Open', 'Closed'], required: true }
});


const Station = mongoose.model('Station', stationSchema);

app.get('/stations', async (req, res) => {
    try {
        const stations = await Station.find(); // Fetch all stations
        console.log('Stations fetched:', stations); // Add this log
        res.json(stations);
    } catch (error) {
        console.error('Failed to fetch stations:', error);
        res.status(500).json({ error: 'Failed to fetch stations' });
    }
});

// Fetch all unique locations from the stations
app.get('/locations', async (req, res) => {
    try {
        const locations = await Station.distinct('location'); // Fetch distinct locations
        res.json(locations);
    } catch (error) {
        console.error('Failed to fetch locations:', error);
        res.status(500).json({ error: 'Failed to fetch locations' });
    }
});

// Fetch stations based on selected location
app.get('/stations/location/:locationName', async (req, res) => {
    const { locationName } = req.params; // Extract location name from URL parameters

    try {
        const stations = await Station.find({ location: locationName }); // Filter stations by location
        if (stations.length === 0) {
            return res.status(404).json({ error: 'No stations found for the selected location' });
        }
        res.json(stations);
    } catch (error) {
        console.error('Failed to fetch stations:', error);
        res.status(500).json({ error: 'Failed to fetch stations' });
    }
});

// Fetch all stations based on query (already implemented)
app.get('/stations/search', async (req, res) => {
    const { location } = req.query; // Extract location from query string

    try {
        const stations = await Station.find({ location: { $regex: location, $options: 'i' } }); // Case-insensitive search
        if (stations.length === 0) {
            return res.status(404).json({ error: 'No stations found for the given location' });
        }
        res.json(stations);
    } catch (error) {
        console.error('Failed to fetch stations:', error);
        res.status(500).json({ error: 'Failed to fetch stations' });
    }
});

app.post('/stations', async (req, res) => {
    try {
        const newStation = new Station(req.body);
        await newStation.save();
        res.status(201).json({ message: 'Station added successfully' });
    } catch (error) {
        console.error('Error adding station:', error);
        res.status(500).json({ message: 'Failed to add station' });
    }
});


// Delete station
app.delete('/stations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStation = await Station.findByIdAndDelete(id);
        if (!deletedStation) {
            return res.status(404).json({ error: 'Station not found' });
        }
        res.status(200).json({ message: 'Station deleted successfully' });
    } catch (error) {
        console.error('Failed to delete station:', error);
        res.status(500).json({ error: 'Failed to delete station' });
    }
});

app.put('/stations/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        await Station.findByIdAndUpdate(id, updatedData, { new: true });
        res.status(200).json({ message: 'Station updated successfully' });
    } catch (error) {
        console.error('Failed to update station:', error);
        res.status(500).json({ error: 'Failed to update station' });
    }
});

const bookingSchema = new mongoose.Schema({
    stationName: String,
    location: String,
    slotsAvailable: Number,
    status: String,
    userId: Number, // Assuming you have a user ID to associate with the booking
    createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

// Endpoint to create a booking
app.post('/bookings', async (req, res) => {
    const { stationName, location, slotsAvailable, status, userId } = req.body;

    if (!stationName || !location || !slotsAvailable || !status || !userId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Create a new booking
        const booking = new Booking({
            stationName,
            location,
            slotsAvailable,
            status,
            userId,
        });

        // Save the booking to the database
        await booking.save();

        // Respond with the saved booking details
        res.status(201).json({ message: 'Booking saved successfully', booking });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ error: 'Failed to save booking' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
