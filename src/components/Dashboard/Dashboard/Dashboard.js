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
import ManageProduct from "../ManageProduct/ManageProduct";
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
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
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
                    <NavLink to={`${url}/makeAdmin`}>
                      <h5>Make Admin</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageProduct`}>
                      <h5>Manage Products</h5>
                    </NavLink>
                    <NavLink to={`${url}/addCourse`}>
                      <h5>Add Course</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageAllOrders`}>
                      <h5>Manage All Orders</h5>
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
            <AdminRoute path={`${path}/manageProduct`}>
              <ManageProduct></ManageProduct>
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
