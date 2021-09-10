import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { serviceOption } from "../services/DataService";
import { id, api, username, sheetId, platform } from "../config.json";

const Inquiry = ({ head, para }) => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { name, email, phone, service, message } = data;
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${api}/${username}/${platform}/${id}?tabId=${sheetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, phone, service, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      notify(
        "Your Response has been submitted. We will contact you Shortly !!"
      );
      setdata({
        ...data,
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {}
  };
  const notify = (message) => toast.success(`${message}`);
  return (
    <>
      <div className="register-sec-w3l jarallax" id="book">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span className="thr">{para}</span>
          </h3>
          <div className="book-appointment" data-aos="zoom-out">
            <form onSubmit={handleSubmit}>
              <div className="gaps" data-aos="fade-right">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps" data-aos="fade-left">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps" data-aos="fade-right">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="gaps" data-aos="fade-right">
                <label htmlFor="service">Service</label>
                <select
                  type="text"
                  name="service"
                  placeholder=""
                  value={service}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select the Services--</option>
                  {serviceOption.map((option) => (
                    <option key={option.key} value={option.service}>
                      {option.service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="gaps" data-aos="fade-left">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message..."
                  value={message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inquiry;
