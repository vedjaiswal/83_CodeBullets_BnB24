import User from '../model/UserSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET;
/* 
signUp:- 

fullName
email
password
gender

Login :-

email
password

*/
export const userLogIn = async (req, res) => {
    try {
        const {email,password} = req.body;
        let user = await User.findOne({ email: email});
        if(!user){
            return res.status(401).json({error:"Please enter correct Credential"})
        }

        let passCompare = await bcrypt.compare(password,user.password);
        if(!passCompare){
            return res.status(401).json({error:"Please enter correct Credential"})
        }
        const data = {
            user:{
                id:user.id,
            }
        }
        
        const auth_token = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({auth_token});
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json('Error: ', error.message);        
    }
}

export const userSignUp = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if(user) {
            return res.status(401).json({ message: 'User already exist'});
        }
        const {fullName,gender,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        
        
         user = await User.create({
            fullName: fullName,
            gender: gender,
            email:email,
            password: secPass,
        })
        
        const data = {
            user:{
                id:user.id,
            }
        }
        const auth_token = jwt.sign(data, JWT_SECRET);
        res.status(200).json( {auth_token} );
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}