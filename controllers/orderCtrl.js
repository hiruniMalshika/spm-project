const Order = require('../userModels/userModel')
const orderCtrl = {
    getOrder: async (req, res) => {
        try {
            const order = await Order.find()
            res.json(order)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
     
}

module.exports = orderCtrl