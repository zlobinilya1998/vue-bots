const {Schema,model} = require('mongoose')

const User = new Schema({
    login: {type: String,required:true,unique:true},
    password: {type: String,required:true},
    email: {type:String,required:true,unique:true},
    favorites: {type:Array,ref:'Sneaker',default:[],},
})

module.exports = model('User',User);