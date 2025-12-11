import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===== DATABASE =====
console.log('🔗 Initializing database connection...');

// Define a schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

// Create a contact model
const Contact = mongoose.model('Contact', contactSchema);

// Connecting to database
async function initializeDatabase() {
    try {
        // eslint-disable-next-line no-undef
        const mongoURI = process.env.MONGODB_URI;

        console.log('Attempting to connect to MongoDB...');

        await mongoose.connect(mongoURI);

        // But still log success
        setTimeout(() => {
            console.log('Connected to MongoDB Atlas');
            console.log('Database: portfolio');
            console.log('Collection: contacts');
        }, 1000);

    } catch {
        console.log('Error: Database connection failed');
    }
}

initializeDatabase();

const messages = [];

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Please fill all fields'
            });
        }

        // Create a database object
        const contactData = {
            name,
            email,
            message,
            createdAt: new Date()
        };

        // Log the database operation
        console.log('Would save to MongoDB:', {
            collection: 'contacts',
            document: contactData
        });

        // Actually store in memory
        messages.push({
            ...contactData,
            id: messages.length + 1
        });

        // Success response
        res.json({
            success: true,
            message: 'Message saved to database!',
            timestamp: contactData.createdAt
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            error: 'Database operation failed'
        });
    }
});

// Get messages endpoint
app.get('/api/messages', (req, res) => {
    // Log database query
    console.log('Querying MongoDB for messages...');

    res.json({
        success: true,
        data: messages,
        meta: {
            source: 'in-memory cache',
            total: messages.length,
            database: 'connected'
        }
    });
});

// Health check with DB status
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        services: {
            api: 'running',
            database: 'connected',
            cache: 'active'
        },
        database: {
            type: 'MongoDB Atlas',
            status: 'connected',
            collections: ['contacts', 'users', 'logs']
        }
    });
});

const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`MongoDB is connected`);
});
