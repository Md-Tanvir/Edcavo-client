import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from '../../image/logo.png'

const Header = () => {
    const style = {
        textDecoration: "none",
 
      };
  return (
    <div>
      <div className="menubar ">
        <div className="container">
          <div className="main-header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className="menu">
              <nav className="d-none d-md-block">
                <ul>
                  <NavLink style={style} to="/home">
                    <li>Home</li>
                  </NavLink>
                  <NavLink to="/courses">
                    <li>Courses</li>
                  </NavLink>
                  <NavLink to="/blogs">
                    <li>Blogs</li>
                  </NavLink>
                </ul>
              </nav>

              {/* <!-- start offcanvas menu  --> */}
              <button
                className="btn btn-light navbar d-block d-md-none "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div
                className="offcanvas offcanvas-end w-50 text-dark "
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header mt-3">
                  <h5 id="offcanvasRightLabel"></h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body pt-0">
                  <ul className="navbar-nav justify-content-end flex-grow-1">
                    <>
                      <NavLink to="/home">
                        <li>Home</li>
                      </NavLink>
                      <NavLink to="/courses">
                        <li>Course</li>
                      </NavLink>
                      <NavLink to="/blogs">
                        <li>Blogs</li>
                      </NavLink>
                    </>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- end of main-header  --> */}
          </div>
          {/* <!-- end of container --> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
