import { useState } from "react";
import {Link} from 'react-router-dom'
import '../Styles/Login.css'


const Login = () => {

  const [formData, setFormData] =useState({
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    setFormData({... formData,[e.target.name]:e.target.value});
  }
  const submitHandler = async (event) => {
    event.preventDefault()
  }
  return (
     
    <div className="page-container">
    <section className="login-section">
      <div className="login-container">
        <h3 className="login-heading">
          Hello <span className="login-welcome">Welcome</span> Back
        </h3>
        <form onSubmit={submitHandler} className="login-form">
          <div className="mb-5">
            <input
              type="email"
              className="login-input"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mt-7">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>

          <p className="login-text">
            Don't have an account?{' '}
            <Link to="/register" className="login-register-link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Login;