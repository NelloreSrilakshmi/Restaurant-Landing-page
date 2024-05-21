import React, { useState } from "react";
import "./contactus.css";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Contactus() {
  const [nextStep, setNextStep] = useState("START");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [textarea, setTextarea] = useState("");
  const [errormessageEmail, setErrorMessageEmail] = useState("");
  const [errormessageMobile, setErrorMessageMobile] = useState("");
  const [errormessageName, setErrorMessageName] = useState("");
  const [errormessageCompany, setErrorMessageCompany] = useState("");
  const [errormessagetextarea, setErrorMessageTextarea] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^\d{10}$/;
  const nameRegex = /^[a-zA-Z\s]*$/; // Regular expression for name (only letters and spaces)

  const validation1 = () => {
    let isValid = true;
    if (!name.trim()) {
      isValid = false;
      setErrorMessageName("Enter your name");
    } else if (!nameRegex.test(name)) {
      isValid = false;
      setErrorMessageName("Enter a valid name (only letters and spaces)");
    } else {
      setErrorMessageName("");
    }
    if (!emailRegex.test(email)) {
      isValid = false;
      setErrorMessageEmail("Enter a valid email");
    } else {
      setErrorMessageEmail("");
    }
    if (!mobileRegex.test(mobile) || mobile.length !== 10) {
        setErrorMessageMobile("Enter a valid 10-digit mobile number");
      } else {
        setErrorMessageMobile("");
      }
      return isValid;
    };

  const validation2 = () => {
    let isValid = true;
    if (!company.trim()) {
      isValid = false;
      setErrorMessageCompany("Enter your company name");
    } else {
      setErrorMessageCompany("");
    }
    if (!textarea.trim()) {
      isValid = false;
      setErrorMessageTextarea("Please Fill");
    } else {
      setErrorMessageTextarea("");
    }
    return isValid;
  };

  const handleSubmitButton = (data) => {
    const isValid = validation1();
    if (!isValid) {
      console.log("stop");
    } else {
      setNextStep(data);
    }
  };

  const handleSubmit1Button = (data) => {
    const isValid = validation2();
    if (!isValid) {
      console.log("stop");
    } else {
      setNextStep(data);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    setErrorMessageName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorMessageEmail("");
  };

  const handleMobile = (e) => {
    const value = e.target.value;
    // Limiting input to 10 characters
    const truncatedValue = value.slice(0, 10);
    setMobile(truncatedValue);
    setErrorMessageMobile("")
  };

  const handlecompany = (e) => {
    setCompany(e.target.value);
    setErrorMessageCompany("");
  };

  const handletextarea = (e) => {
    setTextarea(e.target.value);
    setErrorMessageTextarea("");
  };

  const handleUserType = (type) => {
    setUserType(type);
  };

  const handleNextButton = (data) => {
    setNextStep(data);
    setUserType("");
  };

  const handleCloseButton = (data) => {
    setNextStep(data);
    setUserType("");
    setMobile("");
  };
  return (
    <>
      <Container>
        <Row></Row>
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 5, x: 0 }}
              transition={{ duration: 2.5 }}
            >
              <div>
                <div className="contactus-heading">Got Questions?</div>
                <div className="contactus-paragraph">
                  <p>
                    We are here to Answer your Every Question, Just fill in the
                    Details and we will Take Care of the Rest
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex flex">
                  <div className="contactus-followus">
                    <p>Follow Us on</p>
                  </div>
                  <div className="contactus-icons">
                    <div className="d-flex flex">
                      <div className="contactus-facebook">
                        <a
                          href="https://www.facebook.com/iQuadraInformationServices"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.0001 3.33337H25.0001C22.7899 3.33337 20.6703 4.21135 19.1075 5.77415C17.5447 7.33695 16.6667 9.45657 16.6667 11.6667V16.6667H11.6667V23.3334H16.6667V36.6667H23.3334V23.3334H28.3334L30.0001 16.6667H23.3334V11.6667C23.3334 11.2247 23.509 10.8008 23.8216 10.4882C24.1341 10.1756 24.5581 10 25.0001 10H30.0001V3.33337Z"
                              stroke="#4173B8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className="contactus-instagram">
                        <a
                          href="https://www.instagram.com/iquizuanswer/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.3333 3.33337H11.6666C7.06421 3.33337 3.33325 7.06433 3.33325 11.6667V28.3334C3.33325 32.9357 7.06421 36.6667 11.6666 36.6667H28.3333C32.9356 36.6667 36.6666 32.9357 36.6666 28.3334V11.6667C36.6666 7.06433 32.9356 3.33337 28.3333 3.33337Z"
                              stroke="url(#paint0_linear_2804_3967)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9897 22.9984C25.3438 24.243 24.322 25.2524 23.0695 25.8828C21.8169 26.5132 20.3975 26.7327 19.0131 26.5099C17.6286 26.2871 16.3497 25.6335 15.3581 24.6419C14.3666 23.6504 13.713 22.3715 13.4902 20.987C13.2674 19.6026 13.4869 18.1832 14.1173 16.9306C14.7477 15.6781 15.7571 14.6562 17.0017 14.0104C18.2464 13.3646 19.663 13.1277 21.0501 13.3333C22.465 13.5432 23.7748 14.2025 24.7862 15.2139C25.7976 16.2253 26.4569 17.5351 26.6667 18.95Z"
                              stroke="url(#paint1_linear_2804_3967)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M29.1667 10.8334H29.1834"
                              stroke="url(#paint2_linear_2804_3967)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2804_3967"
                                x1="19.9999"
                                y1="3.33337"
                                x2="19.9999"
                                y2="36.6667"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.0639996" stop-color="#6749D2" />
                                <stop offset="0.564" stop-color="#E91092" />
                                <stop offset="1" stop-color="#E95110" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_2804_3967"
                                x1="20.0722"
                                y1="13.2612"
                                x2="20.0722"
                                y2="26.5946"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.0639996" stop-color="#6749D2" />
                                <stop offset="0.564" stop-color="#E91092" />
                                <stop offset="1" stop-color="#E95110" />
                              </linearGradient>
                              <linearGradient
                                id="paint2_linear_2804_3967"
                                x1="29.1751"
                                y1="10.8334"
                                x2="29.1751"
                                y2="11.8334"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.0639996" stop-color="#6749D2" />
                                <stop offset="0.564" stop-color="#E91092" />
                                <stop offset="1" stop-color="#E95110" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <div className="contactus-linkedin">
                        <a
                          href="https://www.linkedin.com/company/iquadra/about/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.6667 13.3334C29.3189 13.3334 31.8625 14.3869 33.7378 16.2623C35.6132 18.1377 36.6667 20.6812 36.6667 23.3334V35H30.0001V23.3334C30.0001 22.4493 29.6489 21.6015 29.0238 20.9764C28.3986 20.3512 27.5508 20 26.6667 20C25.7827 20 24.9348 20.3512 24.3097 20.9764C23.6846 21.6015 23.3334 22.4493 23.3334 23.3334V35H16.6667V23.3334C16.6667 20.6812 17.7203 18.1377 19.5957 16.2623C21.471 14.3869 24.0146 13.3334 26.6667 13.3334Z"
                              stroke="#2967B0"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.99992 15H3.33325V35H9.99992V15Z"
                              stroke="#2967B0"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.66659 10C8.50753 10 9.99992 8.50766 9.99992 6.66671C9.99992 4.82576 8.50753 3.33337 6.66659 3.33337C4.82564 3.33337 3.33325 4.82576 3.33325 6.66671C3.33325 8.50766 4.82564 10 6.66659 10Z"
                              stroke="#2967B0"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="contactus-youtube">
                        <a
                          href="https://www.youtube.com/@iQuizUAnswer"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M37.5667 10.7C37.3687 9.90898 36.9655 9.18425 36.3978 8.59897C35.8301 8.01369 35.118 7.5886 34.3334 7.36663C31.4667 6.66663 20.0001 6.66663 20.0001 6.66663C20.0001 6.66663 8.53339 6.66663 5.66672 7.43329C4.88214 7.65527 4.17002 8.08036 3.6023 8.66564C3.03458 9.25091 2.63137 9.97564 2.43339 10.7666C1.90875 13.6759 1.65212 16.6271 1.66672 19.5833C1.64802 22.5617 1.90467 25.5355 2.43339 28.4666C2.65166 29.233 3.0639 29.9302 3.6303 30.4908C4.19669 31.0513 4.89809 31.4563 5.66672 31.6666C8.53339 32.4333 20.0001 32.4333 20.0001 32.4333C20.0001 32.4333 31.4667 32.4333 34.3334 31.6666C35.118 31.4447 35.8301 31.0196 36.3978 30.4343C36.9655 29.849 37.3687 29.1243 37.5667 28.3333C38.0873 25.4459 38.3439 22.5172 38.3334 19.5833C38.3521 16.6049 38.0954 13.6311 37.5667 10.7Z"
                              stroke="#D90000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M16.25 25.0333L25.8333 19.5833L16.25 14.1333V25.0333Z"
                              stroke="#D90000"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="contactus-font">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 5, x: 0 }}
              transition={{ duration: 2.5 }}
            >
              <div className="contactus-main">
                <div className="contactus-sub-main">
                  {nextStep === "START" && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 5, x: 0 }}
                      transition={{ duration: 2.5 }}
                    >
                      <div>
                        <div className="d-flex flex">
                          <div className="contactus-cardheading">
                            <p className="contactus-cardcontent">
                              If you’re ready to start, get in touch with us!
                            </p>
                            <hr />
                          </div>
                          <div className="contactus-pagenumber">
                            <p className="contactus-pagenumbers">01/03</p>{" "}
                            <hr />
                          </div>
                        </div>
                        <div>
                          <div className="contactus-third-input">
                            <input
                              type="text"
                              placeholder="Name*"
                              className="contactus-name"
                              onChange={handleName}
                            />
                            <div className="contactus-error">
                              <p>{errormessageName}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex flex">
                            <div className="contactus-first-input">
                              <input
                                type="text"
                                placeholder="Email*"
                                className="contactus-email"
                                onChange={handleEmail}
                              />
                              <div className="contactus-error">
                                <p>{errormessageEmail}</p>
                              </div>
                            </div>
                            <div className="contactus-second-input">
                              <input
                                type="text"
                                placeholder="Mobile Number*"
                                className="contactus-mobile"
                                value={mobile}
                                onChange={handleMobile}
                              />
                              <div className="contactus-error">
                                <p>{errormessageMobile}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="contactus-button">
                            <button
                              className="contactus-submit-button"
                              onClick={() => handleSubmitButton("FIRST")}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {nextStep === "FIRST" && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 5, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <div className="d-flex flex">
                          <div className="contactus-cardheading">
                            <p className="contactus-cardcontent">
                              We want to get to know you
                            </p>
                            <hr />
                          </div>
                          <div className="contactus-pagenumber">
                            <p className="contactus-pagenumbers">02/03</p>{" "}
                            <hr />
                          </div>
                        </div>
                        <div>
                          <p className="contactus-bestexplains">
                            What best explains you ?{" "}
                          </p>
                        </div>
                        <div className="d-flex flex">
                          <div
                            className={`contactus-circle1 ${
                              userType === "JSR"
                                ? "contactus-circle1Active"
                                : ""
                            }`}
                            onClick={() => handleUserType("JSR")}
                          >
                            <p className="contactus-job">Jobseeker</p>
                          </div>
                          <div
                            className={`contactus-circle2 ${
                              userType === "RCR"
                                ? "contactus-circle1Active"
                                : ""
                            }`}
                            onClick={() => handleUserType("RCR")}
                          >
                            <p className="contactus-recruit">Recruiter</p>
                          </div>
                          <div
                            className={`contactus-circle3 ${
                              userType === "EDI"
                                ? "contactus-circle1Active"
                                : ""
                            }`}
                            onClick={() => handleUserType("EDI")}
                          >
                            <p className="contactus-educate">
                              Educational Institute
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="contactus-button">
                            <button
                              className="contactus-next-button"
                              onClick={() => handleNextButton("SECOND")}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {nextStep === "SECOND" && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 5, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <div className="d-flex flex">
                          <div className="contactus-cardheading">
                            <p className="contactus-cardcontent">
                              We want to get to know you
                            </p>
                            <hr />
                          </div>
                          <div className="contactus-pagenumber">
                            <p className="contactus-pagenumbers">03/03</p>{" "}
                            <hr />
                          </div>
                        </div>
                        <div>
                          <div className="contactus-second-input">
                            <input
                              type="text"
                              placeholder="Company Name/Institute Name*"
                              className="contactus-company"
                              onChange={handlecompany}
                            />
                            <div className="contactus-error">
                              <p>{errormessageCompany}</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="contactus-soundsgood">
                            <p className="contactus-soundsgood">
                              Sounds good! Anything else you want to know?
                            </p>
                          </div>
                        </div>
                        <div>
                          <textarea
                            rows="5"
                            cols="50"
                            type="text"
                            id="message"
                            name="message"
                            placeholder=""
                            className="contactus-empty-box"
                            onChange={handletextarea}
                          >
                            {" "}
                          </textarea>
                          <div className="contactus-error">
                            <p>{errormessagetextarea}</p>
                          </div>
                        </div>
                        <div>
                          <div className="contactus-button">
                            <button
                              className="contactus-submit1-button"
                              onClick={() => handleSubmit1Button("THIRD")}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {nextStep === "THIRD" && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 5, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <h1 className="contactus-thankyou">
                          Thank you for submitting,
                        </h1>
                        <h1 className="contactus-chat">
                          we’re excited to chat!
                        </h1>
                        <div>
                          <div className="contactus-reach">
                            <p className="contactus-reach">
                              We will reach out to you soon.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="contactus-button">
                            <button
                              className="contactus-close-button"
                              onClick={() => handleCloseButton("START")}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contactus;
