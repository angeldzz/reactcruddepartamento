import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import imagen from "../assets/images/TralaleroTralala.webp"
export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }
    url = Global.urlDepartamento;
    
    loadDepartamentos = () => {
        let request = "api/departamentos"
        axios.get(this.url + request).then(response => {
            console.log(response.data);
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadDepartamentos();
    }
    render() {
        if(this.state.status !== true){
            return (
                <img className='w-25' src={imagen} alt="tralalero" />
            )
        }
        return (
            <div>
                <table className='table table-striped table-bordered text-center'>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dep, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{dep.numero}</td>
                                        <td>{dep.nombre}</td>
                                        <td>{dep.localidad}</td>
                                        <td><NavLink to={`update/${dep.numero}/${dep.nombre}/${dep.localidad}`} className="btn btn-warning">Update</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.status === false &&
                    <img className='w-25' src={imagen} alt="tralalero" />
                }
            </div>
        )
    }
}
