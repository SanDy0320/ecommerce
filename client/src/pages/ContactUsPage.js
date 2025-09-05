import React from "react";
import Layout from "../components/Layout/Layout";

const ContactUsPage = () => {
  return (
    <Layout title={"Contact Us Now!!!"}>
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title">Contact Us</h2>
                <p className="card-text">
                  We’d love to hear from you! Reach out to us with your queries or feedback.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Email:</strong> sandeep.mahto2003@gmail.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 7011890731
                  </li>
                  <li>
                    <strong>Address:</strong> Block RZ, Vishnu garden, Subhash Nagar , New delhi-110018
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="alert alert-info" role="alert">
              <strong>Send us a message!</strong> We usually respond within 24 hours.
            </div>
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title">Send a Message</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={4}
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUsPage;
