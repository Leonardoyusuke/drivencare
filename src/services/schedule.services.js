import { getSchedule,getAppointment, showUsersAppointment,showDoctorsAppointment, confirmConsult } from "../repository/schedule.repository.js"

export async function schedule(req,res){
    const availableHours = ["09:00:00","10:00:00","11:00:00","13:00:00","14:00:00","15:00:00","16:00:00","17:00:00"]
    console.log(availableHours)
    const doctorsId = req.params.doctorsid
    console.log(doctorsId)

    try {
        const calendar = await getSchedule(doctorsId)
        if (calendar.rowCount==0){
            return("all available")
        }
        // const filteredCalendar = availableHours.filter(calendar.rows.hour) 
        // console.log(filteredCalendar)
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

export async function confirmaAppoitment(req,res){
    const {consultId,confirmation} = req.body

    try {
        const confirm = await confirmConsult(consultId,confirmation)
        res.send("done")
    } catch (error) {
        res.status(500).send(error.message);

    }
}