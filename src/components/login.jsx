import React, { Component } from 'react';

import Joi from 'joi-browser';
import Form from './common/form';

class Login extends Form {
    
    doSubmit = ()=>{
         // call server and perform server things
        // redirect to new page
        
        console.log('submitted');
    }

    state = { 
        data : {
            username : "",
            password : ""
        },
        errors : {}
     }

     schema = {
         username : Joi.string().required(),
         password : Joi.string().required()
     }

    render() { 
        console.log(this.state.data);
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                {/* <Input name="username" error={this.state.errors.username} value ={this.state.data.username} onChange={this.handleChange}/> */}
                    {/* <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input id="password" type="text" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control"/>
                    </div> */}
                    {this.renderInput("username")}
                    {this.renderInput("password","password")}
                    {this.renderButton("Login")}
                </form>
            </div>
         );
    }
}
 
export default Login;