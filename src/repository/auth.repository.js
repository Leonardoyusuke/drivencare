import { db } from "../config/config.js";
    
  export async function emailCheck(email) {
    console.log(email)
    return await db.query(`SELECT * FROM users WHERE email = '${email}'`);
  }

   export async function userRegistry(name, email, criptPassword) {
    return await db.query(`
        INSERT INTO users (
        "name",
        "email",
        "password"
        )
        values($1,$2,$3)
        `,[name,email,criptPassword])
  }

  export async function doctorRegistry(name,email,criptPassword,specialty,localization){
    return await db.query(`
        INSERT INTO doctors(
        "name",
        "email",
        "password",
        "specialty",
        "localization"
        )
        VALUES($1,'${email}',$2,$3,$4)
        `,[name,criptPassword,specialty,localization])
  }

  export async function emailCheckDoctor(email) {
    return await db.query(`SELECT * FROM doctors WHERE email = '${email}'`);
  }