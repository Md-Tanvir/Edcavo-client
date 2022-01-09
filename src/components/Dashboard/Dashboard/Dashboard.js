import React from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddCourse from "../AddCourse/AddCourse";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageCourses from "../ManageCourses/ManageCourses";
import MyOrder from "../MyOrder/MyOrder";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  return (
    <div className="container">
      <div className="py-5 row">
        <div className="">
          <button
            className="btn btn-dash float-end mb-5 mb-md-0"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            Check Dashboard
          </button>

          <div
            className="offcanvas main-canvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                DashBoard
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="dash-nav">
                {admin && (
                  <>
                    <NavLink to={`${url}/manageAllOrders`}>
                      <h5>Manage All Orders</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageCourses`}>
                      <h5>Manage Courses</h5>
                    </NavLink>
                    <NavLink to={`${url}/addCourse`}>
                      <h5>Add Course</h5>
                    </NavLink>
                    <NavLink to={`${url}/makeAdmin`}>
                      <h5>Make Admin</h5>
                    </NavLink>
                  </>
                )}

                {!admin && (
                  <>
                    <NavLink to={`${url}/myOrder`}>
                      <h5>My Order</h5>
                    </NavLink>
                    <NavLink to={`${url}/review`}>
                      <h5>Give Review</h5>
                    </NavLink>
                  </>
                )}
                <div className="text-center">
                  <button onClick={logout} className="btn btn-danger mt-3">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-area">
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageCourses`}>
              <ManageCourses></ManageCourses>
            </AdminRoute>
            <AdminRoute path={`${path}/addCourse`}>
              <AddCourse></AddCourse>
            </AdminRoute>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
