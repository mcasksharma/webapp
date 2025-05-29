import React, { useState, useEffect } from 'react';
import CompanyService from '../../services/CompanyService';
import AuthService from '../../services/AuthService';

const Dashboard: React.FC = () => {
    const [content, setContent] = useState<any>(null);
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        CompanyService.getCompanyInfo()
            .then((response) => {
                setContent(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError('Error fetching company information');
                setLoading(false);
                console.error(error);
            });

        CompanyService.getServices()
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="card">
                <h2 className="card-title">Welcome, {currentUser.username}!</h2>
                <p>You have successfully logged in to ABC Software Solutions dashboard.</p>
            </div>

            {content && (
                <div className="card">
                    <h2 className="card-title">Company Information</h2>
                    <p><strong>Name:</strong> {content.name}</p>
                    <p><strong>Founded:</strong> {content.founded}</p>
                    <p><strong>Headquarters:</strong> {content.headquarters}</p>
                    <p><strong>Employees:</strong> {content.employees}</p>
                    <p><strong>Description:</strong> {content.description}</p>
                </div>
            )}

            <h2>Our Services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                {services.map((service) => (
                    <div key={service.id} className="card">
                        <h3 className="card-title">{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
