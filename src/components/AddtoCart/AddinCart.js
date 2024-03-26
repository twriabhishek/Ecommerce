import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";

const AddinCart = () => {
  const {setCart, cart, addToCart, removeFromCart,removeCompletelyFromCart } = useCart();

  
  const handleRemovefromCart=(id)=>{
    console.log(id);
    removeCompletelyFromCart(id);
  }

  const handleIncreaseCount = (product) => {
    addToCart(product);
  };
  
  const handleDecreaseCount = (product) => {
    removeFromCart(product)
  };
  
  // Calculate the total cost of all items in the cart
  const totalCost = cart.reduce((total, item) => total + (item.price * item.count), 0);
  const shippingCost=20;
  return (
    <div>
      <section className="" style={{ background: "#eee" }}>
        <div className="container h-100 outlet-container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <Link to="/product" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </Link>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {cart.length} items in your cart</p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>{" "}
                            <a href="#!" className="text-body">
                              price <i className="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                      {cart.map((item) => (
                        <div className="card mb-3" key={item.id}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={item.thumbnail}
                                    className="img-fluid rounded-3 mr-3"
                                    alt="Shopping item"
                                   
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{item.title}</h5>
                                  <p className="small mb-0">Brand: {item.brand}</p>
                                  <p className="small mb-0">Stock: {item.stock}</p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div
                                  style={{ width: "80px" }}
                                  className="d-flex flex-row align-items-center"
                                >
                                  <i class="fa-solid fa-plus" onClick={() => handleIncreaseCount(item)}></i>
                                  <h5 className="fw-normal mb-0 ml-2 mr-2">
                                    {item.count}
                                  </h5>
                                  <i class="fa-solid fa-minus" onClick={() => handleDecreaseCount(item)}></i>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">{`$${item.price}`}</h5>
                                </div>
                                <Link style={{ color: "#cecece" }} onClick={()=>{handleRemovefromCart(item.id)}}>
                                  <i className="fas fa-trash-alt" ></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              className="img-fluid rounded-3"
                              style={{ width: "45px" }}
                              alt="Avatar"
                            />
                          </div>

                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-visa fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-amex fa-2x me-2"></i>
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <i className="fab fa-cc-paypal fa-2x"></i>
                          </a>

                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" for="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                siez="17"
                                placeholder="1234 5678 9012 3457"
                                minlength="19"
                                maxlength="19"
                              />
                              <label className="form-label" for="typeText">
                                Card Number
                              </label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                    minlength="7"
                                    maxlength="7"
                                  />
                                  <label className="form-label" for="typeExp">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minlength="3"
                                    maxlength="3"
                                  />
                                  <label className="form-label" for="typeText">
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">{`$ ${totalCost}`}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">{`$ ${shippingCost}`}</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">{`$ ${totalCost+shippingCost}`}</p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span>{`$ ${totalCost+shippingCost}`}</span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddinCart;
