import React, { Component } from 'react';
import Form from './common/form';
import  Joi  from 'joi-browser';

class Register extends Form {
    state = { 
        data : {
            username : "",
            password : "",
            name : ""
        },
        errors : {}
     }
     doSubmit=()=>{
         console.log("submitted");
     }
     schema = {
        username : Joi.string().required().email(),
        password : Joi.string().required().min(5),
        name : Joi.string().required()
     }
    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username")}
                    {this.renderInput("password","password")}
                    {this.renderInput("name")}
                    {this.renderButton("Register")}
                </form>
            </div>
         );
    }
}
 
export default Register;