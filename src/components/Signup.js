import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


const Signup = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "", name: "" })
    let navigate = useNavigate();


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    const handleClick = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:5000/api/auth/CreateUser`, {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password
                })
            })
            const result = await response.json()
            // console.log("Response is :) ", result)
            if (result.success) {
                localStorage.setItem("token", result.authToken)
                props.showAlert("Successfully Signup"," alert-info")
                navigate("/");

            } else {
                props.showAlert(result.error," alert-danger")
                console.log(result)
            }

        } catch (error) {
            console.log(error)
        }
    }

        return (
            <form onSubmit={handleClick}>
                <h2 className="my-4">SignUp to your Account</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} required minLength={4}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }


    export default Signup;