import express from 'express';
import cors from 'cors'
import db from './database/db.js'


import PersonsRoutes from './routes/routes.js'

const app= express()

app.use(cors())
app.use(express.json())
app.use('/inicio',PersonsRoutes)


try {
   await db.authenticate()
   console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`Error: ${error}`)
    
}


app.get('/', (req,res)=>{
    res.send('HOLO MUNDO')
})

app.listen(8000, ()=> {
    console.log('Conexion exitosa http://localhost:8000/')
})