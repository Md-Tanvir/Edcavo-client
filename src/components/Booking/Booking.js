import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const [course, setCourse] = useState({});

  // for getting specific course
  useEffect(() => {
    const url = `https://blooming-springs-47114.herokuapp.com/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((p) => p._id == courseId);

        setCourse(p);
      });
  }, [courseId]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.email = user.email;
    data.status = "pending";
    data.name = course.title;
    data.newPrice = course.newPrice;
    data.img = course.img;

    // sending order to database
    fetch("https://blooming-springs-47114.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order has been placed");
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="py-5">
      {/* spinner */}
      {!course ? (
        <div className="d-flex justify-content-center my-5 pb-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
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
                      <div className="col-4  justify-content-between d-flex align-items-center">
                        <img
                          src={course?.instructorImg}
                          className="img-fluid ins-img"
                          alt=""
                        />
                        <h5 className="mb-0">{course?.instructorName}</h5>
                      </div>
                      <div className="col-8">
                        <h5 className="text-end">Price: ${course?.newPrice}</h5>
                        <p className="text-end mb-0">
                          <i className="fas fa-book me-1 "></i>{" "}
                          {course?.lessons} Lessons
                        </p>
                      </div>
                    </div>
                    <hr />
                    <p className="card-text ">{course?.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h2 className="text-center mb-3">Confirm Your Order</h2>
              <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  defaultValue={user.displayName}
                  {...register("displayName")}
                  className="product-input"
                />

                <input
                  type="email"
                  defaultValue={user.email}
                  {...register("email")}
                  className="product-input"
                />

                <input
                  placeholder="Mobile no."
                  type="tel"
                  {...register("mobile")}
                  className="product-input"
                />
                <input
                  placeholder="Address"
                  type="text"
                  {...register("address")}
                  className="product-input"
                />
                <input
                  type="submit"
                  value="Order Now"
                  className="btn btn-submit"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
