const Router = require('express').Router;
const router = Router();

// Controller
const controller = require('../controllers/pictureController');

router.get('/', controller.picturesGet);
router.get('/:pictureName', controller.pictureGet);
router.get('/:pictureName/appearances', controller.appearancesGet);
router.get('/:pictureName/records', controller.pictureRecordsGet);
router.post('/:pictureName/records', controller.addRecord);

module.exports = router;
