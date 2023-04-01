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

