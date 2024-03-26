import React, { useEffect, useState } from "react";
import ModelDetails from "./ModelDetails";
import { useCart } from "../CartContext.js";
const productsData = require("../Data.json");

const Product = ({ product }) => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const remainder = rating - filledStars;
    const starArray = [];

    for (let i = 0; i < filledStars; i++) {
      starArray.push(<i key={i} className="fa-solid fa-star text-danger"></i>);
    }

    if (remainder >= 0.5) {
      starArray.push(
        <i key="half" className="fa-solid fa-star-half-alt text-danger"></i>
      );
    }

    return starArray;
  };

  const openDetailsModal = (product) => {
    setSelectedProduct(product);
  };
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container outlet-container">
          <div className="row justify-content-center mb-3">
            {productsData.map((product) => (
              <div key={product.id} className="col-md-12 col-xl-10 mb-2">
                <div className="card shadow-0 border rounded-3">
                  <div className="card-body card-box">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                          <img
                            src={product.thumbnail}
                            // className="w-100 h-100"
                            alt={product.title}
                            style={{ height: "200px", width:"200px" }}
                          />
                          <a href="#!">
                            <div className="hover-overlay">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(253, 253, 253, 0.15)",
                                }}
                              ></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-xl-6">
                        <h5>{product.title}</h5>
                        <div className="d-flex flex-column">
                          <div className="d-flex flex-row mb-1">
                            <div className="text-danger me-2">
                              {renderRatingStars(product.rating)}
                            </div>
                            <span>{product.rating}</span>
                          </div>
                          <span>{`Stock: ${product.stock}`}</span>
                        </div>
                        <div className="mt-1 mb-0 text-muted small">
                          <span>100% cotton</span>
                          <span className="text-primary"> • </span>
                          <span>Light weight</span>
                          <span className="text-primary"> • </span>
                          <span>
                            Best finish
                            <br />
                          </span>
                        </div>
                        <div className="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span className="text-primary"> • </span>
                          <span>For men</span>
                          <span className="text-primary"> • </span>
                          <span>
                            Casual
                            <br />
                          </span>
                        </div>
                        <p className="text-truncate mb-4 mb-md-0">
                          {product.description}
                        </p>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          <h4 className="mb-1 me-1">${product.price}</h4>
                          <span className="text-danger">
                            <s>
                              $
                              {(
                                (product.price *
                                  (100 + product.discountPercentage)) /
                                100
                              ).toFixed(2)}
                            </s>
                          </span>
                        </div>
                        <h6 className="text-success">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                            onClick={() => openDetailsModal(product)}
                          >
                            Details
                          </button>
                          <button
                            className="btn btn-outline-primary btn-sm mt-2"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={()=>{handleAddToCart(product)}}
                          >
                            Add to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        {selectedProduct && 
          <ModelDetails  
          product={selectedProduct}
          setSelectedProduct={setSelectedProduct} />
        }
      </div>
    </>
  );
};

export default Product;
