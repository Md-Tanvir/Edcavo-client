import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return (
      <div class="d-flex justify-content-center my-5 pb-5">
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return !admin ? (
    <> </>
  ) : (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default AdminRoute;
