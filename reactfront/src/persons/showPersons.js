import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


const URI = 'http://localhost:8000/inicio/'

const CompShowInicio = ()=> {
        const [persons, setpersons]= useState([])
            useEffect(()=>{
                getpersons()
            },[])

            //procedimiento para mostrar todos la lista
            const getpersons= async()=> {
               const res = await axios.get(URI)
               setpersons(res.data)
            }

            const deletepersons = async(id)=> {
               await axios.delete(`${URI}${id}`)
               getpersons()
            }

            return (
                <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Link to="/create" className='btn btn-primary mt-2 mb-2' ><i className="fas fa-plus" ></i></Link>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>NroID</th>
                                    <th>Nombre</th>
                                    <th>Apellidos</th>
                                    <th>Edad</th>
                                    <th>Email</th>
                                    <th>Telefono</th>
                                    <th>Dirección</th>
                                    <th>Opciones 
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                { persons.map ( (person) => (
                                    <tr key={ person.id}>
                                        <td> { person.nroID } </td>
                                        <td> { person.name } </td>
                                        <td> { person.lastname } </td>
                                        <td> { person.age } </td>
                                        <td> { person.email } </td>
                                        <td> { person.phone } </td>
                                        <td> { person.direction } </td>
                                        <td>
                                            {<Link to={`/edit/${person.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>}
                                            <button onClick={ ()=>deletepersons(person.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )) }
                            </tbody>
                        </table>
                    </div>    
                </div>
            </div>
            )
}

export default CompShowInicio