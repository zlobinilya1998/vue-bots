const {Schema,model,ObjectId} = require('mongoose')

const Order = new Schema({
    date: {type: Date,default:Date.now()},
    price: {type: Number,required:true},
    items: [{type:ObjectId,ref:'Sneaker',required:true}],
    user: {type:String,required:true},
})

module.exports = model('Order',Order);