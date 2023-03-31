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
