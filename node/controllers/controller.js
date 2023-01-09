import PersonsModel from "../models/models.js";

//Metodos para definir el CRUD

//Consultar todos los registros
export const getAllPersons =async (req, res) => {
        try {
            const persons= await PersonsModel.findAll()
            res.json(persons)
        } catch (error) {
            res.json({message:  error.message})
            
        }
}
//Consultar 1

export const getPersons= async(req, res)=>{
    try {
        const persons= await PersonsModel.findAll({
            where:{id:req.params.id } 
        })
        res.json(persons[0])
    } catch (error) {
        res.json({message:  error.message})
    }
}

//Registrar
export const createPersons = async(req, res) => {

    try {
        await PersonsModel.create(req.body)
        res.json({
            "message":"!Registro creado correctamente"
        })
    } catch (error) {
        res.json({message:  error.message})
    }
}
//Actualizar registro
export const updatePersons= async (req, res) => {
    try {
        await PersonsModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "message":"!Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message:  error.message})
    }
}

//Eliminar registro
export const deletePersons = async (req, res)=> {
    try {
        await PersonsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"!Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:  error.message})
    }
}