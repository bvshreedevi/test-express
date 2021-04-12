var express = require('express');
var router = express.Router();
router.get('/test', (req, res, next) => {

	res.send('Hello from Routes Folder!')

})

module.exports = router;