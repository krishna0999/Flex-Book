import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}),
          });

          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate("/");
          }else {
            alert('Invalid credentials');
        }
    }

    const onChangeHandle = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className="container my-3">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" value={credentials.email} onChange={onChangeHandle} name="email" id="email" aria-describedby="emailHelp"/>
          <div id="email" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label"> Password </label>
          <input type="password" className="form-control" value={credentials.password} onChange={onChangeHandle} name="password" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
