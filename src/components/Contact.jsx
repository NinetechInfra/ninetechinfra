import React from "react";

const Contact = ({ data, head, src }) => {
  return (
    <>
      <div className="banner-bottom" id="contact-detail">
        <div className="container">
          <h3 className="heading-agileinfo" data-aos="zoom-in">
            {head}
            <span />
          </h3>
          <div className="container">
            <div className="card">
              <div className="row">
                <div className="col-md-6 agileits_services_grid text-center">
                  <div className="w3_agile_services_grid1">
                    <img src={src} alt="contact" width="auto" height="300px" />
                  </div>
                </div>
                <div
                  className="col-md-6 agileits_services_grid text-center"
                  // style={{ margin: "5em 0" }}
                >
                  <div id="contact" className="contact">
                    <div className="">
                      <div className="col-md-8">
                        <div className="info">
                          <div className="address">
                            <a
                              href={data.addressUrl}
                              target="_blank"
                              rel="noreferrer"
                              data-tip="Click here for Directions"
                            >
                              <i className="fad fa-map-marker-alt"></i>
                              <h4>Location:</h4>
                              <p>
                                Corp. Off: #14, <br />
                                3rd Floor, Hithaa complex, <br />
                                80 feet Ring Road (Kengeri), Nagadevanhalli,{" "}
                                <br />
                                BENGALURU – 560056, Karnataka
                              </p>
                            </a>
                          </div>

                          <div className="email">
                            <a
                              href={`mailto:${data.email}`}
                              data-tip="Click here for sending Email"
                            >
                              <i className="fad fa-envelope"></i>
                              <h4>Email:</h4>
                              <p>{data.email}</p>
                            </a>
                          </div>

                          <div
                            className="phone"
                            data-tip="Click on any number to Contact us"
                          >
                            <i className="fad fa-phone"></i>
                            <h4>Call:</h4>
                            <span>
                              <ul className="contact-number">
                                <li>
                                  <a
                                    href={`tel:${data.phoneOne}`}
                                    data-tip={`Click here to call ${data.phoneOne}`}
                                  >
                                    {data.phoneOne}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`tel:${data.phoneTwo}`}
                                    data-tip={`Click here to call ${data.phoneTwo}`}
                                  >
                                    {data.phoneTwo}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`tel:${data.phoneThree}`}
                                    data-tip={`Click here to call ${data.phoneThree}`}
                                  >
                                    {data.phoneThree}
                                  </a>
                                </li>
                              </ul>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
