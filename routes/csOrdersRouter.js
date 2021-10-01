const router = require('express').Router()
const CSOrdersCtrl = require('../controllers/csOrdersCtrl')

const auth = require('../middleware/csauth');

router.route('/csorder')
    .get(CSOrdersCtrl.getOrders)
    .post(CSOrdersCtrl.createOrder)

router.route('/csorder/:id')
    .delete(CSOrdersCtrl.deleteOrder)
    .put(CSOrdersCtrl.updateOrder)
    .get(CSOrdersCtrl.getSingleOrder)

router.route('/csorderupdate/:id')
    .put(CSOrdersCtrl.updateStatus)

router.route('/additems/:id')
    .patch(auth, CSOrdersCtrl.addItemList)

router.route('/calculateAmount/:id')
    .get(CSOrdersCtrl.calculateAmount)
module.exports = router