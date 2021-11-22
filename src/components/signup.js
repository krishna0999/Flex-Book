import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({name, email, password}),
          });

          const json = await response.json();
          console.log(json);
            localStorage.setItem('token',json.authToken);
            navigate("/");
        }

    const onChangeHandle = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

    return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">Name </label>
          <input type="name" className="form-control" onChange={onChangeHandle} name="name" id="name" aria-describedby="emailHelp"/>
          </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChangeHandle} name="email" id="email" aria-describedby="emailHelp"/>
          <div id="email" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"> Password </label>
          <input type="password" className="form-control" onChange={onChangeHandle} minLength={8}  name="password" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"> Confirm Password </label>
          <input type="password" className="form-control" onChange={onChangeHandle} name="cpassword" id="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
    )
}

export default Signup
