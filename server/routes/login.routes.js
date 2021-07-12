const { Router } = require('express');
const router = Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verify = require('../middlewares/jwt')

router.post('/',async (req,res)=>{
    let {login,password} = req.body;
    let user = await User.findOne({login});
    if (!user){
        return res.send({message:`Пользователь ${login} не найден`,type:'danger'})
    }
    const validPassword = bcrypt.compareSync(password,user.password);
    if (!validPassword){
        return res.send({message:'Пользователь или пароль введены не корректно!',type:'danger'});
    }
    const token = jwt.sign({login},process.env.TOKEN_SECRET);
    res.header("auth-token",token).send({message:'Вход выполнен, переадресация',type:'success',user:{...user._doc,token}})
})

router.post('/session',verify,async (req,res)=>{
    let {login} = req.user
    let user = await User.findOne({login})
    res.send(user)
})

module.exports = router;