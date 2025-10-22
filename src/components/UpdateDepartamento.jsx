import React, { Component } from 'react'
import { Navigate } from "react-router-dom";
import Global from '../Global';
import axios from 'axios'
export default class UpdateDepartamento extends Component {
    url = Global.urlDepartamento;

    cajaID= React.createRef()
    cajaNombre= React.createRef()
    cajaLocalidad= React.createRef()

    state = {
        mensaje: "",
        status: false,
    }

    updateDepartamento = (event) => {
        event.preventDefault();
        let request = "api/Departamentos/"
        let departamento = {
            numero: parseInt(this.cajaID.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        axios.put(this.url + request,departamento).then(response =>{
            this.setState({
                mensaje: "Se a actualizado el departamento" + departamento.nombre,
                status: true
            })
            })
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <h1>Update Departamento</h1>
                    {this.state.mensaje && (
                        <div className="alert alert-success" role="alert">
                            {this.state.mensaje}
                        </div>
                    )}
                    <form>
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input className="form-control" type="number" defaultValue={this.props.id} ref={this.cajaID} placeholder="Introduzca ID" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input className="form-control" type="text" defaultValue={this.props.nombre} ref={this.cajaNombre} placeholder="Introduzca Nombre" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Localidad</label>
                            <input className="form-control" type="text" defaultValue={this.props.localidad} ref={this.cajaLocalidad} placeholder="Introduzca Localidad" />
                        </div>
                        <button type="button" className="btn btn-warning w-100" onClick={this.updateDepartamento}>
                            Update Departamento
                        </button>
                        {
                            this.state.status === true &&
                            <Navigate to="/" />
                        }
                    </form>
                </div>
            </div>
        )
    }
}
