const express = require('express');
const User = require('../models/User');
const router = express.Router(); 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

// Create a User using: POST "/api/auth/". Doesn't require Auth
//endpoint 1 to create a user with name emai and password
const JWT_SECRET = 'prashulovesnodejs'

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], 

    async (req, res) => { 
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {

    let user = await User.findOne({email:req.body.email});
    console.log(user);
    if(user)
    {
        return res.status(400).json({ error:'sorry a user with this email address already exists'});
    }

        const salt = bcrypt.genSaltSync(10);
        let secpass = bcrypt.hashSync(req.body.password,salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass  
        });

        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        console.log(authToken);

        //res.status(201).json(user);
        res.json(authToken);
    
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

//endpoint 2 to login a user with email and password

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be empty').exists()
], 

    async (req, res) => { 

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        const {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user)
            {
                return res.status(400).json({error:'Invalid credentials'});
            }

        const iscorrectpass = await bcrypt.compare(password,user.password);
        if(!iscorrectpass)
        {
            res.status(400).json({error:'Invalid credentials'})    
        }
        
        const data = {
            user:{
                id:user.id
            }
        }

        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({Authtoken:authToken});

    } catch (error) {
        res.status(500).send({error:'Internal Server Error'});
    }

    });

    //endpoint 3 to get user details with name emai and password

    router.post('/getuser',fetchuser,async (req, res) => { 
        console.log('hi');
        try {
            userId = req.user.id;
            const user = await User.findById(userId).select('-password');
            if(!user)
            {
                return res.status(400).json({error:'Invalid credentials'});
            }
                res.send(user);
            }catch (error) {
                res.status(500).send({error:'Internal Server Error'});
            }
        });
    module.exports = router;
