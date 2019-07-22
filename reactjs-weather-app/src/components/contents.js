import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Content = (props)=>{

    return(
        <tbody>
            <h1>{props.error}</h1>
            <tr>
                <td>{props.date}</td>
                <td>{props.city}</td>
                <td>{props.country}</td>
                <td>{props.humidity}</td>
                <td>{props.description}</td>
                <td>{props.maxTemp}</td>
                <td>{props.minTemp}</td>
            </tr>

        </tbody>
    )
}

export default Content;