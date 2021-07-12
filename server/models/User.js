const {Schema,model,ObjectId} = require('mongoose')

const User = new Schema({
    login: {type: String,required:true,unique:true},
    password: {type: String,required:true},
    email: {type:String,required:true,unique:true},
    favorites: [{type:ObjectId,ref:'Sneaker',unique:true}],
    purchases: [],
})

module.exports = model('User',User);