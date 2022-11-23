import express from 'express';
// import SaveUser, {DeleteUser,GetUser,SearchUser} from '../Model/Registerdb.js';

// const express = require('express');
const router = express.Router();

// const mongoose = require('mongoose');
import mongoose from 'mongoose';

 mongoose.connect("mongodb://localhost:27017/Users", {useNewUrlParser :true});
    
    
    
    const UserSchema = new  mongoose.Schema({
        Name: String,
        Email: String,
        Birthday: String, 
        Number: String,
        Password: String,
      });



router.get('/', (req, res) => {
    res.send(' Please add correct path')
})

router.post('/profile',function(req,res){
  
    const User =mongoose.model("User", UserSchema);  // User collection
    
    User.find({ Email:req.body.email},function(err,use){
    console.log("oke = " + req.body.email);
         // this use here is an array that is returned from db
         if(err){
            console.log(err);
            res.send({"value": "error"})
        }else{
           
            if(use.length>0){
                //console.log(use.email);
               res.send(use)
            }else{
                res.send({"value": "-1"})
            }
        
        }
        
     
        });

    });

router.post('/signin',authorizeUserspresence,function(req,res){
    // var email = req.body.email;
    // var password = req.body.password;
    // console.log("Email = "+email+", password is "+password);
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


        function authorizeUserspresence(req, res, next) {

            const User =mongoose.model("User", UserSchema);  // User collection
   
            const qq=User.find({ Email:req.body.email , Password: req.body.password},function(err,use){
            
                 // this use here is an array that is returned from db
                 if(err){
                    console.log(err);
                    res.send({"value": "error"})
                }else{
                  // console.log(use);
                    if(use.length>0){
                        next()
                    }else{
                        res.send({"value": "-1"})
                    }
                
               // console.log(use);
                // use.forEach(function(us){
                //     console.log(us.Email);
                // });
                }
                
             
                });

          }



          router.post('/updateuser',function(req,res){
           
            const User =mongoose.model("User", UserSchema);  // User collection
            //

            console.log(req.body.Birthday);
            console.log(req.body.email);
            User.findOneAndUpdate({ email:req.body.email }, { "$set": { "Birthday":req.body.Birthday,"Password":req.body.password , Name: req.body.name, Number: req.body.Phonenumber }}).exec(function(err, book){
                if(err) {
                    console.log(err);
                    res.send({"value": "-1"})
                } else {
                    console.log("Successfully updated the document.");
                    res.send({"value":"1"});
                   
                }
             });



//Birthday:req.body.birthday,
// console.log(req.body.name);
//             User.updateOne({Email:req.body.email} , { "$set": {Email:req.body.email,Birthday:req.body.birthday,Password:req.body.password, Phonenumber: req.body.Phonenumber, name: req.body.name},function(err){
//                 console.log(req.body.name);
//                 if(err){
//                     console.log(err);
//                     res.send({"value": "-1"})
//                 }else{
//                     res.send({"value":"1"});
//                 console.log("Successfully updated the document.");
//                 }
//             });



            
          });

        




          function SaveUser(name1,email1,Birthday1,Phonenumber1, password1){

    
            const User =mongoose.model("User", UserSchema);  // User collection
            
            const row1 = new User({   
                Name: name1,
                Email : email1,
                Birthday: Birthday1,
                Number: Phonenumber1,
                Password:password1
            });
            
            row1.save();  //for saving a single value
        
        };
















export default router;

// module.exports = router;