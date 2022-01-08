import React from "react";
import { useForm } from "react-hook-form";
import "./AddCourse.css";

const AddCourse = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // for adding new Course
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addCourse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Successfully Added");
          reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-center">Add New Course</h2>
      <div className="pb-5 pt-3">
        {/* form for adding new Course */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title")}
            placeholder="Course Name"
            className="service-input"
          />
          <br />

          <input
            {...register("img", { required: true })}
            placeholder="Course Image Link"
            className="service-input"
          />
          <br />
          <input
            {...register("instructorName")}
            placeholder="Instructor Name"
            className="service-input"
          />
          <br />
          <input
            {...register("instructorImg", { required: true })}
            placeholder="Instructor Image Link"
            className="service-input"
          />
          <br />
          <input
            {...register("lessons", { required: true })}
            placeholder="Course Lesson"
            type="number"
            className="service-input"
          />
          <input
            {...register("description")}
            placeholder="Course Description"
            className="service-input"
          />
          <br />

          <input
            {...register("newPrice", { required: true })}
            placeholder="Course Price"
            type="number"
            className="service-input"
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" value="Add Course" className="btn btn-submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
