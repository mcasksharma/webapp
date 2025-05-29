import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        setMessage('');
        setSuccessful(false);

        AuthService.register(username, email, password, fullName)
            .then((response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            });
    };

    return (
        <div className="auth-form">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                {!successful && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className={successful ? "alert alert-success" : "alert alert-danger"}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
