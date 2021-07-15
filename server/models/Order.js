const {Schema,model,ObjectId} = require('mongoose')

const Order = new Schema({
    price: {type: Number,required:true},
    items: [{type:ObjectId,ref:'Sneaker',required:true}],
    user: {type:String,required:true},
},{ timestamps: true })

module.exports = model('Order',Order);