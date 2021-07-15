const {Schema,model,ObjectId} = require('mongoose')

const User = new Schema({
    login: {type: String,required:true,unique:true},
    password: {type: String,required:true},
    email: {type:String,required:true,unique:true},
    favorites: [{type:ObjectId,ref:'Sneaker'}],
    phone: {type: String,default:null},
    photo: {type: String,default:null},
    roles: [{type:String}]
})

module.exports = model('User',User);