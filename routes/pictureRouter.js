const Router = require('express').Router;
const router = Router();

// Controller
const controller = require('../controllers/pictureController');

router.get('/', controller.picturesGet);
router.get('/:pictureId', controller.pictureGet);
router.get('/:pictureId/records', controller.pictureRecordsGet);
router.post('/:pictureId/records', controller.addRecord);

module.exports = router;
