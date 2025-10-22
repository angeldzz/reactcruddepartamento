import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
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
                <table className='table table-striped table-bordered table-dark'>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((departamento, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{departamento.numero}</td>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
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
