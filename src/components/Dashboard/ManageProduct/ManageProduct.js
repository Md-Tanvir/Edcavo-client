import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [courses, setCourses] = useState(null);

  // Getting all Courses
  useEffect(() => {
    fetch("https://thawing-forest-88832.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  // Deleting course with id
  const handleDelete = (id) => {
    const action = window.confirm("Do you want to delete the product?");
    if (action) {
      fetch(`https://thawing-forest-88832.herokuapp.com/delteProduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted successfully");
            const remaining = courses.filter((course) => course._id !== id);
            setCourses(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center">All The Courses</h2>
      {/* spinner */}
      {!courses && (
        <div class="d-flex justify-content-center">
          <div class="spinner-grow my-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-2 row-cols-md-4 g-5">
        {courses?.map((course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img
                src={course?.img}
                style={{ height: "200px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">{course?.title}</h3>
                <h5>$ {course?.newPrice}</h5>

                <button
                  onClick={() => handleDelete(course?._id)}
                  className="btn btn-danger float-end"
                >
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
