import React from "react";
import Layout from "../components/Layout/Layout";

const AboutUsPage = () => {
  return (
    <Layout title={"About Us - Know more about eCommerce Site"}>
      <div className="aboutus-bg">
        <div className="container my-5">
          {/* Hero Section */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="fw-bold display-4">About Us</h1>
              <p className="lead">
                We make great products easy to find and deliver delight to your doorstep.
              </p>
              <a href="#faq" className="btn btn-primary btn-lg mt-3 shadow">Learn More</a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/images/about.jpeg" alt="About Us" className="img-fluid aboutus-hero-img animate__animated animate__fadeInRight" style={{ maxHeight: '320px' }} />
            </div>
          </div>
          {/* Mission and Values */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm aboutus-card">
                <div className="card-body">
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">
                    Since 2020, YourShop has connected shoppers with quality
                    products at fair prices. We aim to provide fast shipping,
                    secure payments, and friendly customer service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm aboutus-card">
                <div className="card-body">
                  <h3 className="card-title">Our Values</h3>
                  <ul>
                    <li>Customer-first approach</li>
                    <li>Transparent pricing</li>
                    <li>Sustainable packaging</li>
                    <li>Quality without compromise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Animated Stats */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm aboutus-card">
                <div className="card-body">
                  <h4 className="fw-bold display-5" id="ordersCount">1M+</h4>
                  <p>Orders Delivered</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm aboutus-card">
                <div className="card-body">
                  <h4 className="fw-bold display-5" id="ratingCount">4.8/5</h4>
                  <p>Customer Rating</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm aboutus-card">
                <div className="card-body">
                  <h4 className="fw-bold display-5" id="deliveryCount">72h</h4>
                  <p>Avg. Delivery Time</p>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Accordion */}
          <div className="row g-4 mt-5" id="faq">
            <div className="col-md-8 mx-auto">
              <div className="accordion aboutus-accordion" id="aboutAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What makes YourShop different?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#aboutAccordion">
                    <div className="accordion-body">
                      We focus on customer delight, fast delivery, and curated quality products at the best prices.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How can I contact support?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#aboutAccordion">
                    <div className="accordion-body">
                      You can email us at <a href="mailto:support@yourshop.com">support@yourshop.com</a> or call <b>+91-7011890731</b>.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Is my payment secure?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#aboutAccordion">
                    <div className="accordion-body">
                      Yes, we use SSL encryption and PCI-DSS compliance for all transactions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm aboutus-card">
                <div className="card-body">
                  <h3>Contact Us</h3>
                  <p>
                    Email:{" "}
                    <a href="mailto:support@yourshop.com">support@yourshop.com</a>
                  </p>
                  <p>Phone: +91-7011890731</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm aboutus-card">
                <div className="card-body">
                  <h3>Secure &amp; Reliable</h3>
                  <p>
                    We provide SSL-encrypted payments, PCI-DSS compliance, and COD
                    in select cities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
