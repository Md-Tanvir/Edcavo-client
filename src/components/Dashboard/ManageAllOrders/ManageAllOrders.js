import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState(null);
    const [isApproved, setIsApproved] = useState(false);
    // getting all orders
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isApproved]);

   // deleting order with id

   const handleDelete = (id) => {
    const action = window.confirm("Do you want to cancel the order?");
    if (action) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Canceled successfully");
            const remaining = allOrders.filter((order) => order._id !== id);
            setAllOrders(remaining);
          }
        });
    }
  };
  // updating order status
  const handleStatus = (id) => {
    fetch(`http://localhost:5000/allOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Order Shipped");
          setIsApproved(true);
        }
      });
  };

    return (
        <div>
        <div className="container my-3">
          {allOrders && (
            <h2 className="text-center mb-5">Total Orders: {allOrders.length}</h2>
          )}
  
          {!allOrders && (
            <div className="d-flex justify-content-center my-5 pb-5">
              <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="services">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {allOrders?.map((order) => (
                <div key={order._id} className="col">
                  <div className="card h-100">
                    <img
                      src={order?.img}
                      style={{ height: "200px", objectFit: "cover" }}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{order?.name}</h5>
                      <p className="card-text">
                        Order from: <b>{order?.email}</b>
                      </p>
                      <p>Status: '{order?.status}'</p>
                      <button
                        onClick={() => handleStatus(order._id)}
                        className="btn btn-outline-success"
                      >
                        Give Approval
                      </button>
  
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-danger float-end"
                      >
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ManageAllOrders;