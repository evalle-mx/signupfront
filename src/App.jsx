import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class App extends Component {

    constructor() {
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.updEmail = this.updEmail.bind(this)
        this.updPwd = this.updPwd.bind(this)

        this.onEnviar = this.onEnviar.bind(this)
    }


    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    updEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    updPwd(event){
        this.setState({
            password:event.target.value
        })
    }

    onEnviar(event){
        event.preventDefault()

        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered )
            .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            username: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onEnviar}>
                            <input type='text' placeholder='Full Name' onChange={this.changeFullName}
                                value={this.state.fullName} className='form-control form-group' />

                            <input type='text' placeholder='Username' onChange={this.changeUsername} 
                                value={this.state.username} className='form-control form-group' /> 

                            <input type='text' placeholder='E-mail' onChange={this.updEmail} 
                                value={this.state.email} className='form-control form-group' /> 

                            <input type='password' placeholder='Password' onChange={this.updPwd} 
                                    value={this.state.password} className='form-control form-group' />

                            <input type="submit" className='btn btn-danger btn-block' value='Enviar'/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

export default App;