const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


const JWT_SIGN = 'mynameiskrishna00';

//ROUTE 1 : Endpoint to create a new user using his details
router.post('/createuser',[
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
], async (req,res) => {
  //Proceed if there are no errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    //Create a user with unique email-id
    let user = await User.findOne({email : req.body.email});
    if(user){
      return res.status(400).json({error : "User with this email already exists."});
    }
    //using bcryptjs to create a salt to form a secure password for the users by using genSalt
    //and then using hash to add the salt to the original password.
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      // .then(user => res.json(user));
      const data = {
        user : {
          id : user.id,
        }
      }
      const authToken = jwt.sign(data,JWT_SIGN);//Creating an token to send the user for future authentication
      console.log(authToken);
      // res.json(user);
      res.json({authToken});
    }
      catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured");
      }
})

//ROUTE 2 : Endpoint to authenticate an existing  user using some details
router.post('/login',[
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password cannot be set to blank").exists(),
], async (req,res) => {
//Proceed if there are no errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const{email,password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error : "Please enter correct login credentials."});
    }

    const comparePass = await bcrypt.compare(password,user.password);
    if(!comparePass){
      return res.status(400).json({error : "Please enter correct login credentials."});
    }

    const data = {
      user : {
        id : user.id,
      }
    }
    const authToken = jwt.sign(data,JWT_SIGN); //Creating an token to send the user for future authentication
    console.log(authToken);
    res.json({authToken});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
})


//ROUTE 3 : Endpoint to get loggedin user details 
router.post('/getuser', fetchuser , async (req,res) => {
  try {
    let userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
})

module.exports = router;