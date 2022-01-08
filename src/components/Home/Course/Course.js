import React, { useEffect, useState } from "react";
import "./Course.css";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="container py-5">
        <h1 className="text-center my-3">Explore Popular Courses</h1>
        <div className='border-green mx-auto'></div>
        <div className="mt-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-4 gy-5">
          {courses?.map((course) => (
            <div className="col">
              <div className="card h-100">
                <img src={course?.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{course?.title}</h4>
                  <div className="row align-items-center mt-4 ">
                    <div className="col-4 d-flex justify-content-around align-items-center float-end">
                      <img
                        src={course?.instructorImg}
                        className="img-fluid ins-img"
                        alt=""
                      />
                      <p className="mb-0 ins-name">{course?.instructorName}</p>
                    </div>
                    <div className="col-8 text-end">
                      <p className="mb-0">
                        <i className="fas fa-book me-1"></i> {course?.lessons}{" "}
                        Lessons
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row d-flex justify-content-between  align-items-center">
                    <div className="col-6">
                      <h4 className="mb-0 course-price">${course?.newPrice}</h4>
                    </div>
                    <div className="col-6 text-end">
                      <button className="btn course-btn">Get Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
