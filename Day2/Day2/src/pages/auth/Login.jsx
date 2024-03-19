import React, { useState } from 'react';
import "../../assets/css/Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const [role, setRole] = useState('User'); // State to hold selected role

    const handleRoleChange = (event) => {
        setRole(event.target.value); // Update selected role
    };

    const handleLogin = () => {
        // Perform login logic based on selected role
        if (role === 'User') {
            // Redirect to user home page
            history('/project6/user/home');
        } else if (role === 'Admin') {
            // Redirect to admin main page
            history('/project6/admin/main');
        }
    };

    const handleForget = () =>{

        history('/project6/forger-password');
    };

    const handleRegister = () => {
        history('/project6/register');
    };

    return (
        <div className='loginbg'>
        <div className="login-container">
            <h2>Login</h2>
            <div className="input-group">
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={role} onChange={handleRoleChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="button-group">
                <button className="login-button" onClick={handleLogin}>Login</button>
                <button className="forgot-button" onClick={handleForget}>Forgot Password</button>
            </div>
            <div className="register-group">
                <p>New user? <a onClick={handleRegister}>Register here</a></p>
            </div>
        </div>
        </div>
    )
}

export default Login;
