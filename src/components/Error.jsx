import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
// import './Error.css';

const Error = () => {
    const navigate = useNavigate();
    const err=useRouteError();
    console.log(err,"error")

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div className="error-container">
            <div className="error-content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLU3U2VG98nFZz35laMG6-R-kDWH7oQDr0fA&s" alt="Lost Food Icon" className="error-image" />
                <h1>{err.status}</h1>
                <h2>Oops! Page not found</h2>
                <p>
                    {err.data}
                </p>
                <button onClick={goToHome} className="home-button">Back to Home</button>
            </div>
        </div>
    );
};

export default Error;
