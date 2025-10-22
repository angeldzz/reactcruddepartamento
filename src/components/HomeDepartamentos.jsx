import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: []
    }
    url = Global.urlDepartamento
    loadDepartamentos = () => {
        let request = "webresources"
        axios.get(this.url + request)
    }
  render() {
    return (
      <div>
        <h1>Home Departamentos</h1>
      </div>
    )
  }
}
