import { getSchedule,getAppointment } from "../repository/schedule.repository.js"

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
        const insert = await getAppointment(doctorsId,usersId,consultTime,consultDate)
        console.log(insert,"insert")
        res.send(insert).status(201)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);

    }
}