import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState({});

  // for getting specific course
  useEffect(() => {
    const url = `/course.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p.id == courseId);

        setCourse(p);
      });
  }, [courseId]);

  return (
    <div className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div key={course?._id} className="col">
              <div className="card h-100">
                <img
                  src={course?.img}
                  style={{ height: "400px", objectFit: "cover" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h2 className="card-title mb-3">{course?.title}</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-3  justify-content-between d-flex align-items-center">
                      <img
                        src={course?.instructorImg}
                        className="img-fluid ins-img"
                        alt=""
                      />
                      <h4 className='mb-0'>{course?.instructorName}</h4>
                    </div>
                    <div className="col-9">
                      <h5 className="text-end">Price: ${course?.newPrice}</h5>
                      <p className="text-end mb-0">
                        <i className="fas fa-book me-1 "></i> {course?.lessons} Lessons
                      </p>
                    </div>
                  </div>
                  <hr />
                  <p className="card-text ">{course?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
