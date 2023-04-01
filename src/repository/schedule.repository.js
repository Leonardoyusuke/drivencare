import { db } from "../config/config.js";

export async function getSchedule(doctorsId) {
    return await db.query(`
    SELECT TO_CHAR("consultDate", 'DD-MM-YYYY') AS Day,"consultTime" as Hour FROM schedule
    WHERE "doctorsId" = $1
    ORDER BY "consultDate"
    `, [doctorsId])
}

export async function getAppointment(doctorsId, usersId, consultTime, consultDate) {
    return await db.query(`
    INSERT INTO schedule 
    ("usersId","doctorsId","consultTime","consultDate")
    values($1,$2,'${consultTime}','${consultDate}')
    `,[usersId,doctorsId])
}

export async function showUsersAppointment(usersId){
    return await db.query(`
    SELECT s."usersId",s."doctorsId",s."consultTime",TO_CHAR(s."consultDate", 'DD-MM-YYYY') as consultDate,d.specialty
    FROM schedule s
    left join doctors d
    on s."doctorsId" = d.id 
    WHERE s."usersId" = $1`,[usersId])
}
export async function showDoctorsAppointment(doctorsId){
    return await db.query(`
    SELECT s."consultTime",s."consultDate",u.name as patient,d.specialty
    FROM schedule s
    left join doctors d
    on s."doctorsId" = d.id
    left join users u
    on s."usersId"= u.id
    where s."doctorsId" = $1`,[doctorsId])
}