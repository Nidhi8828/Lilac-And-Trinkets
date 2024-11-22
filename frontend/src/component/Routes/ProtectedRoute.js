import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return <Fragment>Loading...</Fragment>;
  }

  return (
    <Fragment>
      <Route
        {...rest}
        element={(props) => {
          if (!isAuthenticated) {
            return <Navigate to="/login" />;
          }

          if (isAdmin && user.role !== "admin") {
            return <Navigate to="/login" />;
          }

          return <Component {...props} />;
        }}
      />
    </Fragment>
  );
};

export default ProtectedRoute;
