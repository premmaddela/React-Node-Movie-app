const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const routes = require('./routes/index');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api', routes);
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fullstack-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = app;