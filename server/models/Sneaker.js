const {Schema,model} = require('mongoose')

const Sneaker = new Schema({
    name: {type: String,required:true,unique:true},
    price: {type: Number,required:true},
    id: {type:Number,required:true,unique:true}
})

module.exports = model('Sneaker',Sneaker);