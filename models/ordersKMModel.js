const mongoose = require ('mongoose');


const orderskmSchema = new mongoose.Schema({
        
    order_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    order_name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,        
        required: true
    },
     
    status: {
        type: String,
        default: 'Display'
    },
    


}, {
    timestamps: true
})

module.exports = mongoose.model("OrdersKM", orderskmSchema)