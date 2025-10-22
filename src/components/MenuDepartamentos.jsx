import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MenuDepartamentos extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Departamentos</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createDepartamento">Create Departamento</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createHospital">X</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hospitales</a>
                                <ul className="dropdown-menu">
                                    <li>Hola</li>
                                    <li>Hola2</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
  }
}
