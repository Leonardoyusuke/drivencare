import { db } from "../config/config.js";

export async function searchByName(name){
    return await db.query(`
    SELECT name, specialty, localization FROM doctors WHERE name = '${name}'
    `)
}
export async function searchBySpecialty(specialty){
    return await db.query(`
    SELECT name, specialty, localization FROM doctors WHERE specialty = $1
    `,[specialty])
}
export async function searchByLocalization(localization){
    return await db.query(`
    SELECT name, specialty, localization FROM doctors WHERE localization = $1
    `,[localization])
}
export async function historic(usersId){
    return await db.query(`
    SELECT s."consultTime",s."consultDate",u.name as patient, d.specialty
    FROM schedule s
    left join users u
    on s."usersId"= u.id
	left join doctors d
	on s."doctorsId" = d.id
    where s."consultDone" = true AND u.id = $1`,[usersId])
}