import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
const MyOrder = () => {
  const [products, setOrders] = useState(null);
  const { user } = useAuth();
  const email = user.email;

  // get orders of logged user
  useEffect(() => {
    fetch(`https://blooming-springs-47114.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // cancelling order with id
  const handleCancel = (id) => {
    const action = window.confirm("Do you want to cancel the product?");
    if (action) {
      fetch(`https://blooming-springs-47114.herokuapp.com/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = products.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center mb-5">Your Orders</h2>
      {/* spinner */}
      {!products && (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow my-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-2 row-cols-md-4 g-5">
        {products?.map((pd) => (
          <div key={pd._id} className="col">
            <div className="card h-100">
              <img
                src={pd?.img}
                style={{ height: "200px", objectFit: "cover" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{pd?.name}</h5>

                <h5>$ {pd?.newPrice}</h5>
                <p>Status: "{pd?.status}"</p>

                <button
                  onClick={() => handleCancel(pd?._id)}
                  className="btn btn-danger float-end"
                >
                  <i className="fa-regular fa-trash-can"></i> Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
