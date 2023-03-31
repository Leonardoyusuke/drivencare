import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid";
import { emailCheck,emailCheckDoctor,userRegistry,doctorRegistry } from "../repository/auth.repository.js";
import  Jwt  from "jsonwebtoken";


export async function signup(req,res) {
    const {name,email,password} = req.body
    const criptPassword = bcrypt.hashSync(password,10)
    try {
        const checkExist = await emailCheck(email)
        if (checkExist.rowCount>0){
            return res.sendStatus(409)
        }
        const register = await userRegistry(name,email,criptPassword) 
        res.status(201).send(name)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

export async function signin(req,res){
    const {email, password} = req.body
    try {
        const userCheck = await emailCheck(email)
        if (userCheck.rows.length < 1) return res.sendStatus(401);
        const decryptPassword = bcrypt.compareSync(password,
        userCheck.rows[0].password)
        if(!decryptPassword)return res.sendStatus(401)


        const token = Jwt.sign(
            { userId: userCheck.rows[0].id },
            process.env.SECRET_KEY,
            { expiresIn: 86400 }
          );
          return res.send({
            token: token,
            userId: userCheck.rows[0].id,
          });
            
    } catch (error) {
        res.status(500).send(error.message);

    }
}
export async function signupdoctors(req,res) {
    const {name,email,password,specialty,localization} = req.body
    const criptPassword = bcrypt.hashSync(password,10)
    try {
        const checkExist = await emailCheck(email)
        if (checkExist.rowCount>0){
            return res.sendStatus(409)
        }
        const register = await doctorRegistry(name,email,criptPassword,specialty,localization) 
        res.status(201).send(name)
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}
export async function signinDoctors(req,res){
    const {email, password} = req.body
    try {
        const userCheck = await emailCheckDoctor(email)
        console.log(userCheck)
        if (userCheck.rows.length < 1) return res.sendStatus(401);
        const decryptPassword = bcrypt.compareSync(password,
        userCheck.rows[0].password)
        if(!decryptPassword)return res.sendStatus(401)


        const token = Jwt.sign(
            { userId: userCheck.rows[0].id },
            process.env.SECRET_KEY,
            { expiresIn: 86400 }
          );
          return res.send({
            token: token,
            userId: userCheck.rows[0].id,
          });
            
    } catch (error) {
        res.status(500).send(error.message);

    }
}