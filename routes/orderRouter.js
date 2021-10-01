const router = require('express').Router()
const categoryCtrl = require ('../controllers/orderCtrl')

router.route('/order')
    .get(categoryCtrl.getOrder)


module.exports = router