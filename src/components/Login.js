import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const result = await response.json()
            // alert("successfull Response is :) ",result.success)
            // console.log("successfull Response is :) ",result.success)
            if (result.success) {
                props.showAlert("Successfully login", " alert-info")
                localStorage.setItem("token", result.authToken)
                navigate("/");

            } else {
                props.showAlert("Enter an valid credentials", "alert-danger")
                console.log(result)
            }


        } catch (error) {
            console.log(error)
        }
        // setCredentials({password:""})
    }
    return (
        <form onSubmit={handleClick}>
            <h2 className="my-4">Login to your Account</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;