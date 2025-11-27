const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Contact schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const contact = new Contact({
            name,
            email,
            message
        });

        await contact.save();
        res.status(201).json({ message: 'Your message was sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error. Try again later' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});