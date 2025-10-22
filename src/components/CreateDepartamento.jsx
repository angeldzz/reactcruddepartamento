import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
export default class CreateDepartamento extends Component {
    url = Global.urlDepartamento;

    state = {
        mensaje: "",
        status:false
    }

    cajaID = React.createRef()
    cajaNombre = React.createRef()
    cajaLocalidad = React.createRef()
    CreateDepartamento = () => {
        let request = "api/Departamentos"
        let departamento = {
            numero: parseInt(this.cajaID.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        axios.post(this.url + request, departamento).then(
            this.setState({ 
                mensaje: "Se a creado el departamento " + departamento.nombre,
                status:true,
            })
        )
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-white">
                                <h1 className="h3 mb-0">Create Departamento</h1>
                            </div>
                            <div className="card-body">
                                {this.state.mensaje && (
                                    <div className="alert alert-success" role="alert">
                                        {this.state.mensaje}
                                    </div>
                                )}
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">ID</label>
                                        <input className="form-control" type="text" ref={this.cajaID} placeholder="Introduzca ID"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input className="form-control" type="text" ref={this.cajaNombre} placeholder="Introduzca Nombre"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Localidad</label>
                                        <input className="form-control" type="text" ref={this.cajaLocalidad} placeholder="Introduzca Localidad"/>
                                    </div>
                                    <button type="button" className="btn btn-primary w-100" onClick={this.CreateDepartamento}>
                                    Crear Departamento
                                    </button>
                                {
                                    this.state.status === true &&
                                    <Navigate to="/"/>
                                }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
