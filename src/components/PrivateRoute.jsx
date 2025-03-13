// PrivateRoute.js
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';  
import NotAccess from './NotAccess';  

function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();  

    if (!isAuthenticated) {
        return <NotAccess />;  
    }

    return children;  
}

export default PrivateRoute;
