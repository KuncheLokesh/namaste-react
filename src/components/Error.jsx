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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLU3U2VG98nFZz35laMG6-R-kDWH7oQDr0fA&s"
      alt="Lost Food Icon"
      className="w-32 h-32 mx-auto mb-6"
    />
    <h1 className="text-4xl font-bold text-red-500">{err.status}</h1>
    <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-4">Oops! Page not found</h2>
    <p className="text-gray-600 mb-6">{err.data}</p>
    <button
      onClick={goToHome}
      className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Back to Home
    </button>
  </div>
</div>

    );
};

export default Error;
