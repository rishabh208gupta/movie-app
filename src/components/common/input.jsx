import React from 'react';

const Input = (props) => {
   // console.log("input val",props.value);
    return ( 
        <div className="form-group">
            <label htmlFor={props.name}>{props.name}</label>
            <input  id={props.name} type={props.type} name={props.name} value={props.value} onChange={props.onChange} className="form-control"/>
            {props.error && <div className="alert"><label htmlFor={props.name}>{props.error}</label></div>}
        </div>
     );
}
 
export default Input;