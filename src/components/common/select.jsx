import React from 'react';


const Select = (props) => {
   //console.log("opt",props.value);
    return ( 
        <div className="form-group"
        ><label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name} value ={props.value} onChange={props.onChange} className="form-control">
                <option value=""/>
                {/* <option value={props.options[0]._id}>{props.options[0].name}</option> */}
                
                {props.options.map(
                   option=>(
                    <option key={option._id} value ={option._id}>
                        {option.name}
                    </option>
                   ) 
                )}
            </select>
            {props.error && <div className="alert alert-danger"><label htmlFor={props.name}>{props.error}</label></div>}
        </div>
     );
}
 
export default Select;