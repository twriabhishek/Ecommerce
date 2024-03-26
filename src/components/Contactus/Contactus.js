import React from "react";

const Contactus = () => {
  return (
    <div className="100-vh d-flex align-items-center contact-section-main flex-column outlet-container">
      <div className="outlet-container w-75 w-sm-75 mx-auto d-flex align-items-center contact-section">
        <div class="container">
          <div class="form-section mx-auto">
          <h2 className="text-center mt-4 mb-5">Contact Form</h2>
            <form>
              <div class="row">
                <div class="mb-3 col-12 col-lg-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter First Name"
                  />
                </div>
                <div class="mb-3 col-12 col-lg-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Enter Your Query Here
                </label>
                <div class="col-12 p-0">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    style={{maxHeight:"4.5rem"}}
                  ></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary mb-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
