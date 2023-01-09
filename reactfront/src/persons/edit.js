import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/inicio/'

const CompEditPersons = () => {
    const [name, setname] = useState('')
    const [lastname, setlastname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [direction, setdirection] = useState('')
    const navigate = useNavigate() 
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name:name,
            lastname:lastname,
            age:age,
            email:email,
            phone:phone,
            direction:direction
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setname(res.data.name)
        setlastname(res.data.lastname)
        setage(res.data.age)
        setemail(res.data.email)
        setphone(res.data.phone)
        setdirection(res.data.direction)
    }

    return (
        <div>
        <h3>Editar Usuario</h3>
        <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditPersons