import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/inicio/'

const CompCreatePersons = () => {
    const [nroID, setNroID] = useState('')
    const [name, setname] = useState('')
    const [lastname, setlastname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [direction, setdirection] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nroID: nroID, name:name,lastname:lastname,age:age,email:email,phone:phone,direction:direction})
        navigate('/')
    }   

    return (
        <div>
           <h3>Registrar Nuevo Usuario</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>NroID</label>
                    <input
                        value={nroID}
                        onChange={ (e)=> setNroID(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Nombre</label>
                    <textarea
                        value={name}
                        onChange={ (e)=> setname(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <div className='mb-3'>
                     <label className='form-label'>Apellidos</label>
                    <textarea
                        value={lastname}
                        onChange={ (e)=> setlastname(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  <div className='mb-3'>
                     <label className='form-label'>Edad</label>
                    <textarea
                        value={age}
                        onChange={ (e)=> setage(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  <div className='mb-3'>
                     <label className='form-label'>Email</label>
                    <textarea
                        value={email}
                        onChange={ (e)=> setemail(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  <div className='mb-3'>
                     <label className='form-label'>Celular</label>
                    <textarea
                        value={phone}
                        onChange={ (e)=> setphone(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  <div className='mb-3'>
                     <label className='form-label'>Dirección</label>
                    <textarea
                        value={direction}
                        onChange={ (e)=> setdirection(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Registrar</button>                  
           </form>
        </div>
    )
}

export default CompCreatePersons