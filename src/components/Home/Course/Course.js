import React, { useEffect, useState } from "react";

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
        <h2 className="text-center my-3">Explore Popular Courses</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses?.map((course) => (
            <div className="col">
              <div className="card h-100">
                <img src={course?.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{course?.title}</h5>
                  <p className="card-text">
                    {course?.description.slice(0, 150)}
                  </p>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col-4 d-flex justify-content-around align-items-center">
                      <img src={course?.instructorImg} alt="" />
                      <p className="mb-0">{course?.instructorName}</p>
                    </div>
                    <div className="col-5">
                    
                      <p>{course?.lessons}</p>
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
