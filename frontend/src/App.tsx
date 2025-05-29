import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import AuthService from './services/AuthService';

function App() {
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(null);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="container navbar-container">
                    <Link to="/" className="navbar-brand">
                        ABC Software Solutions
                    </Link>
                    <ul className="navbar-nav">
                        {currentUser ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/dashboard" className="nav-link">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/dashboard"
                        element={
                            currentUser ? <Dashboard /> : <Navigate to="/login" replace />
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div style={{ padding: '2rem 0' }}>
            <h1>Welcome to ABC Software Solutions</h1>
            <p>Leading provider of innovative software solutions for enterprises.</p>
            <div style={{ marginTop: '2rem' }}>
                <h2>Our Services</h2>
                <div className="card">
                    <h3 className="card-title">Custom Software Development</h3>
                    <p>Tailored software solutions for your unique business needs</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Mobile App Development</h3>
                    <p>Native and cross-platform mobile applications</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Cloud Solutions</h3>
                    <p>Secure and scalable cloud infrastructure and migration services</p>
                </div>
            </div>
        </div>
    );
}

export default App;
