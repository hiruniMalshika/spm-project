const mongoose = require ('mongoose');


const foodSchema = new mongoose.Schema({
        
    food_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,        
        required: true
    },
    ingredients: {
        type: String,        
        required: true
    },
    images: {
        type: Object,
        // required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Display'
    },
    
    sold: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        // required: true
    }


}, {
    timestamps: true
})

module.exports = mongoose.model("Foodsold", foodSchema)