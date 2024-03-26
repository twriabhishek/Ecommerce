import React from "react";
const Aboutdata = require("./Aboutproduct.json");

const About = () => {
  console.log(Aboutdata);

  return (
    <>
      <section class="services-section text-capitalize" id="services">
        <div class="container text-center common-title fw-bold">
          <h2 class="common-heading">
            What we will do for <br />
            you and your fashion
          </h2>
          <hr class="w-25 mx-auto" />
        </div>
      </section>
      <div>
        <section className="">
          <div className="container mb-5">
            <div className="row">
              {Aboutdata.map((item) => (
                <div key={item.id} className="col-12 col-lg-3 about-item">
                  <div class="text-center rounded-2 p-4 card-box">
                    <img
                      src={item.image}
                      alt="link"
                      class="img-thumbnail rounded"
                      style={{ height: "250px" }}
                    />
                    <h5 class="my-3 text-capitalize fw-bold">
                      {item.category}
                    </h5>
                    <p class="mb-5 text-capitalize" style={{height:"150px", overflowY:"scroll"}}>{item.description}</p>
                    <div class="d-flex justify-content-center align-items-center">
                      <a
                        href="#services"
                        class="icon-span rounded-circle d-flex justify-content-center align-items-center"
                      >
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
