const Router = require('express').Router;
const router = Router();

// Controller
const controller = require('../controllers/pictureController');

router.get('/', controller.picturesGet);

module.exports = router;
