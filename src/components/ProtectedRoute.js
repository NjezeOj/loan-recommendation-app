import React from "react";
import { Navigate, Route } from "react-router-dom";


function ProtectedRoute({ element: Element, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Element {...props} /> : <Navigate to="/" />
            }
        />
    );
}

export default ProtectedRoute;
