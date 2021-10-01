const router  = require('express').Router()
const orderCtrlKM = require ('../controllers/orderCtrlKM')

router.route('/orders')
    .get(orderCtrlKM.getOrder)
    .post(orderCtrlKM.createOrder)

router.route('/orders/:id')
    .delete(orderCtrlKM.deleteOrder)
    .put(orderCtrlKM.updateOrder)

module.exports = router