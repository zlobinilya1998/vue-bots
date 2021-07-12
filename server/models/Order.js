const {Schema,model,ObjectId} = require('mongoose')

const Order = new Schema({
    date: {type: String,required:true},
    price: {type: Number,required:true},
    items: [{type:Schema.Types.ObjectID,ref:'Sneaker',required:true}],
    user: {type:String,required:true},
})

module.exports = model('Order',Order);