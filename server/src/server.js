// filepath: /Users/prem/CODE/fullstack-app/server/src/server.js
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(routes);

// Fetch animated movies from TMDb API
app.get('/api/movies', async (req, res) => {
    try {
        const apiKey = '12345678';
        const page = req.query.page || 1; // Get the page number from the query parameter
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16&page=${page}`
        );
        res.json({
            results: response.data.results,
            total_pages: response.data.total_pages, // Include total pages in the response
        });
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

// Apollo Server
async function startApolloServer() {
    const server = new ApolloServer({ schema });
    await server.start();
    server.applyMiddleware({ app });

    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startApolloServer();