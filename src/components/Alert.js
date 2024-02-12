import React from 'react';


const Alert = (props) => {
    // let {message , color} = props.alert
    return (
        props.alert && <div className={`alert alert-warning alert-dismissible fade show p-2 m-0 ${props.alert.color}`} role="alert">
            {props.alert.message} 
        </div>
    );
}

export default Alert;