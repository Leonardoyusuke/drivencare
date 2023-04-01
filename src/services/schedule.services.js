import { getSchedule,getAppointment, showUsersAppointment,showDoctorsAppointment } from "../repository/schedule.repository.js"

export async function schedule(req,res){
    const doctorsId = req.params.doctorsid
    console.log(doctorsId)

    try {
        const calendar = await getSchedule(doctorsId)
        if (calendar.rowCount==0){
            return("all available")
        } 
        res.send(calendar.rows)
    } catch (error) {
        res.status(500).send(error.message);

    }
}

export async function insertSchedule(req,res){
    const usersId = res.locals.userId
    const {doctorsId,consultTime,consultDate} = req.body

    try {
        const insertAppointment = await getAppointment(doctorsId,usersId,consultTime,consultDate)
        res.send("done").status(201)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);

    }
}

export async function getUsersSchedule(req,res){
    const usersId = req.params.usersid
    console.log(usersId)
    try {
        const appointments = await showUsersAppointment(usersId)
        console.log(appointments)
        res.send(appointments.rows)
    } catch (error) {
        res.status(500).send(error.message);

    }
}
export async function getDoctorsSchedule(req,res){
    const doctorsId = req.params.doctorsid
    console.log(doctorsId)
    try {
        const appointments = await showDoctorsAppointment(doctorsId)
        console.log(appointments)
        res.send(appointments.rows)
    } catch (error) {
        res.status(500).send(error.message);

    }
}