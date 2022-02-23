const router = require('express').Router();

const blossomsController = require('../controllers/blossomsController');

router.get('/', blossomsController.list);
router.post('/add', blossomsController.save);
router.get('/update/:id', blossomsController.edit);
router.post('/update/:id', blossomsController.update);
router.get('/delete/:id', blossomsController.delete);
router.get('/search/:id', blossomsController.search);

module.exports = router;

