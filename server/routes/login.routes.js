const { Router } = require('express');
const router = Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs')

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
    res.send({message:'Вход выполнен, переадресация',type:'success',user})
})

module.exports = router;