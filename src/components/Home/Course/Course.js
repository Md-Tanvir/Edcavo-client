import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../../../Redux/slices/courseSlice";

const Course = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const courses = useSelector((state) => state.courses.allCourses);
  const status = useSelector((state) => state.courses.status);
  return (
    <div>
      {/* spinner */}
      {status === "pending" ? (
        <div class="d-flex justify-content-center my-5 pb-5">
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container py-5">
            <h1 className="text-center my-3">Explore Popular Courses</h1>
            <div className="border-green mx-auto"></div>
            <div className="mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">
              {courses?.slice(0, 6)?.map((course) => (
                <div className="col">
                  <div className="card h-100">
                    <img src={course?.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-title">{course?.title}</h4>
                      <div className="row align-items-center mt-4 ">
                        <div className="col-6 d-flex justify-content-around align-items-center float-end">
                          <img
                            src={course?.instructorImg}
                            className="img-fluid ins-img"
                            alt=""
                          />
                          <p className="mb-0 ins-name">
                            {course?.instructorName}
                          </p>
                        </div>
                        <div className="col-6 text-end">
                          <p className="mb-0">
                            <i className="fas fa-book me-1"></i>{" "}
                            {course?.lessons} Lessons
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row d-flex justify-content-between  align-items-center">
                        <div className="col-6">
                          <h4 className="mb-0 course-price">
                            ${course?.newPrice}
                          </h4>
                        </div>
                        <div className="col-6 text-end">
                          <Link to={`/booking/${course?._id}`}>
                            <button className="btn course-btn">Get Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Course;
