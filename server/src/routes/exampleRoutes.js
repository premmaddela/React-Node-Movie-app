const express = require('express');
const router = express.Router();

// Example route
router.get('/example', (req, res) => {
    res.send('Example route working!');
});

module.exports = router;