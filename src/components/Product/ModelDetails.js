import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ModelDetails = ({ product, setSelectedProduct }) => {
  return (
    <div>
      <>
        <div className="modal d-flex w-100 h-100 justify-content-center align-items-center">
          <div className="modal-content">
            <div className="row">
              <div className="col-10 common-model-heading mt-3 d-flex justify-content-start">
                <h3>Product Details</h3>
              </div>
              <div className="col-2">
                <i
                  className="fa-solid fa-xmark mt-3 me-3 close mr-3"
                  onClick={() => {
                    setSelectedProduct(null);
                  }}
                ></i>
              </div>
            </div>
            <Carousel className="d-flex w-100 h-100 justify-content-center align-items-center">
              {product.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={image}
                    height={350}
                    className="d-block w-100"
                    alt={`Product ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="">
              <div className="d-flex justify-content-end m-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    setSelectedProduct(null);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ModelDetails;
