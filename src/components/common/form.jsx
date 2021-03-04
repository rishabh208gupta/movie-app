import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = { 
        data : {},
        errors : {}
     }
     validate=()=>{
        const result = Joi.validate(this.state.data,this.schema, {abortEarly:false});
       // console.log(errors);
       if(!result.error) return null;
       const errors = {};
       for(let item of result.error.details){
           errors[item.path[0]] = item.message;
       }
       console.log(errors);
       return errors; 
    }

    validateProperty=({name, value})=>{
       const obj = { [name] : value}
       const schema = { [name] : this.schema[name]};
       const {error} = Joi.validate(obj,schema);
       return error ? error.details[0].message : null;
    }

     handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("doSubmit");
       const errors =  this.validate();
       this.setState({errors : errors|| {}});
        if(errors) return;
        
        this.doSubmit(); 
    }

    handleChange = (e)=>{
        const errorMessage =  this.validateProperty(e.currentTarget);
         const data = this.state.data;
         const errors = this.state.errors;
         data[e.currentTarget.name] = e.currentTarget.value;
         if(errorMessage){
             errors[e.currentTarget.name] = errorMessage;
         }
         else delete errors[e.currentTarget.name];
         this.setState({data : data, errors: errors});
     }

     renderButton=(label)=>{
         return (
            <button disabled = {this.validate()} className="btn btn-primary">{label}</button>
         );
     }

     renderInput=(name, type="text")=>{
        //console.log(this.state.data[name]);

        return (
            <Input
            type = {type}
            name={name} 
            error={this.state.errors[name]} 
            value ={this.state.data[name]} 
            onChange={this.handleChange}/>
        );
     }

     renderSelect =(name,label,options)=>{
        // console.log(this.state.data);
         return (
            <Select
            name = {name}
            label = {label}
            options = {options}
            onChange ={this.handleChange}
            value = {this.state.data[name]}
            error = {this.state.errors[name]}
            />
         );
     }
}
 
export default Form;