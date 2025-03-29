// filepath: /Users/prem/CODE/fullstack-app/server/src/routes/index.js
const express = require('express');
const exampleRoutes = require('./exampleRoutes');

const router = express.Router();

// Use example routes
router.use('/example', exampleRoutes);

module.exports = router;