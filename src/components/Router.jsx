import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamento from './CreateDepartamento';
import UpdateDepartamento from './UpdateDepartamento';
export default class Router extends Component {
    
    render() {
        function UpdateElement(){
            let {id,nombre,localidad} = useParams()
            return(<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<HomeDepartamentos />} />
                    <Route path='/createDepartamento' element={<CreateDepartamento />} />
                    <Route path='/update/:id/:nombre/:localidad' element={<UpdateElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
