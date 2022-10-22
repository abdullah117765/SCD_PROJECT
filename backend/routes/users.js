import express from 'express';
import SaveUser from '../Model/Registerdb.js';

// const express = require('express');
const router = express.Router();






const users = [
    {
        name: 'John Doe',
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send(' Please add correct path')
})

// router.post('/', (req, res) => {
//     const user = req.body;
//     console.log(req.body);
//     res.send(`added into the DB`)
// })

router.post('/signin',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    console.log("Email = "+email+", password is "+password);
    res.send({"value": "1"});
    });

    router.post('/signup',function(req,res){
        var name1 = req.body.name;
        var email = req.body.email;
        var Birthday = req.body.birthday;
        var phonenumber = req.body.Phonenumber;
        var password = req.body.password;
        console.log("Email = "+email+", password is "+password, "birthday"+ Birthday, "Phonenumber"+phonenumber,"Name"+name1);
        res.send({"value": "1"});
        SaveUser(name1,email,Birthday,phonenumber,password);
        });

        

export default router;

// module.exports = router;