import { searchByLocalization, searchByName, searchBySpecialty } from "../repository/search.repository.js"

export async function searchDoctorByName(req,res){
    const name = req.params.name
    console.log(name)
    try {
        const search = await searchByName(name)
        console.log(search)
        return res.status(201).send(search.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
export async function searchDoctorBySpecialty(req,res){
    const specialty = req.params.specialty
    try {
        const search = await searchBySpecialty(specialty)
        return res.status(201).send(search.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
export async function searchDoctorByLocalization(req,res){
    const localization = req.params.localization
    try {
        const search = await searchByLocalization(localization)
        return res.status(201).send(search.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}