const Order = require ('../models/ordersKMModel')
const orderCtrlKM = {
    getOrder: async (req, res) => {
        try {
            const order = await Order.find()
            res.json(order)

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    createOrder : async (req, res) => {
        try {

            const {order_id, order_name, price, status} = req.body;

            const order = await Order.findOne({order_id})

            if(order)
                return res.status(400).json({msg: "This order already exists."})
            
            const newOrder = new Order({
                order_id, order_name, price, status
            })

            await newOrder.save()
            res.json({msg: "New order   Created."})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteOrder: async (req, res) => {
        try {
            await Order.findByIdAndDelete(req.params.id)
            res.json({msg: "Delete the order"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateOrder : async (req, res) => {
        try {
            const {order_id, order_name, price, status} = req.body;

            await Order.findOneAndUpdate({_id: req.params.id}, {
                order_id, order_name, price, status
            })
            
            res.json({msg: "Updated a Order  "})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = orderCtrlKM