const express = require('express');
const router = express.Router();
const tldlController = require('../app/controllers/tldlController.js');
const verifyToken = require('../app/middlewares/verifyToken');

router.post(
    '/createEmployees',
    // verifyToken.verifyToken,
    tldlController.createEmployees,
);
router.post(
    '/getEmployees',
    // verifyToken.verifyToken,
    tldlController.getEmployees,
);
 router.get('/getAllEmployees', verifyToken.verifyToken, tldlController.getAllEmployees);
module.exports = router;
