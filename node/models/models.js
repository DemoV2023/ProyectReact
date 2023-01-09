//importar conexion a la BD
import db from "../database/db.js";
//importar sequelize
import {DataTypes} from "sequelize";

const PersonsModel = db.define('persons',{
    nroID :{type: DataTypes.STRING},
    name :{type: DataTypes.STRING},
    lastname :{type: DataTypes.STRING},
    age :{type: DataTypes.STRING},
    email :{type: DataTypes.STRING},
    phone :{type: DataTypes.STRING},
    direction :{type: DataTypes.STRING},
})

export default PersonsModel