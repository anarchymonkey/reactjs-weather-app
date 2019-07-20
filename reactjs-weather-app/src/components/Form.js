import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Form = (props)=>{

    return(
        <div className={'container'}>
    <form onSubmit={props.callApi}>
        <div className = {'form-group'}>
        <label for="city"><h1>City</h1></label>
          <input type='text' name="city" id="city" className = {'form-control'} placeholder="City Name"></input>
        </div>
        <div className = {'form-group'}>
          <label for="queryData"><h1>Country</h1></label>
          <input type='text' name="country" id="country" className = {'form-control'} placeholder="Country"></input>
        </div>
          <button className={"btn btn-danger"} style={{padding:'20px',margin:'20px'}}>Get Weather</button>
          
    </form>
    </div> )

}

export default Form;