import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<HomeDepartamentos />} />
                    <Route path='/createDepartamento' element={<CreateDepartamento />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
