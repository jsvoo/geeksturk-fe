import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-quill/dist/quill.snow.css";
import CreatableSelect from "react-select/creatable";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../layout/Layout";
const components = {
  DropdownIndicator: null,
  IndicatorsContainer: () => null,
};
const createOption = (label) => ({
  label,
  value: label,
});
function JobPost2() {
  const [startDate, setStartDate] = useState(new Date());
  const [showInputBox, setShowInputBox] = useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState([]);
  const [jobType, setJobType] = useState("");

  const [notify, setNotify] = useState({
    expressHiring: false,
    development: false,
    projectManager: false,
  });

  const handleKeyDown = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
    }
  };

  const handleInputChange = (event) => {
    setShowInputBox(event.target.value);
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",

      backgroundColor: "transparent",
      boxShadow: "none",
      "&:hover": {
        borderColor: "none",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      zIndex: 9999,
    }),
    multiValue: (provided, state) => ({
      ...provided,
      color: "white",
      backgroundColor: "#00a7ac",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: "#dc3545",
        color: "white",
      },
    }),
    ValueContainer: (provided, state) => ({
      ...provided,
      display: "flex",
      backgroundColor: "#343a40",
      flexWrap: "nowrap",
    }),
  };
  return (
    <Layout>
      {/* <Breadcrumb pageName="Post A Jobs" pageTitle="Post A Jobs" /> */}
      <div className="job-post-area  mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-end">
                        <h5>Section 2/4</h5>
                      </div>{" "}
                      <div className="section-title2">
                        <h5>Receive qualified applicants</h5>
                      </div>
                    </div>
                    <div className="col-md-6h">
                      <div className="form-inner mb-25">
                        <label htmlFor="jobtitle">Applicant collection*</label>
                        <div className="input-area">
                          <img src="assets/images/icon/company-2.svg " alt="" />
                          <input
                            type="text"
                            id="jobtitle"
                            name="jobtitle"
                            placeholder="Enter email to receive qualified applicants"
                          />
                        </div>
                      </div>
                    </div>

                    <header>
                      <h5>Screening questions</h5>
                      <p>
                        We recommend adding few questions to narrow down
                        qualified applicants
                      </p>
                    </header>

                    <div className="screening-questions-container faq-page">
                      <div className="genarel-qustions-area">
                        <div class="accordion" id="accordionExample">
                          <div class="accordion-item mb-20">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Have you completed the following level of
                                education [degree]?{" "}
                                <div className="recommended ">Recommended</div>
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body answer-item gap-3 d-flex align-items-start justify-content-between">
                                <div className="question-input">
                                  <label htmlFor="">
                                    Degree <sup>*</sup>
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      style={{
                                        border: "1px solid grey",
                                        borderRadius: "7px",
                                      }}
                                      className="p-1"
                                      placeholder="Bachelor's degree"
                                    />
                                  </div>
                                </div>
                                <div className="ideal-answer">
                                  <div>Ideal Answer:</div>
                                  <b>Yes</b>
                                </div>
                                <div className="required">
                                  <input type="checkbox" id="required-q" />{" "}
                                  <label htmlFor="required-q">
                                    Required qualification?
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div class="accordion-item mb-20">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How many years experience do you have
                                with[skill]?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body answer-item gap-3 d-flex align-items-start justify-content-between">
                                <div className="question-input">
                                  <label htmlFor="">
                                    Skill <sup>*</sup>
                                  </label>
                                  <div>
                                    <input
                                      type="text"
                                      style={{
                                        border: "1px solid grey",
                                        borderRadius: "7px",
                                      }}
                                      className="p-1 ps-3"
                                      placeholder="React JS"
                                    />
                                  </div>
                                </div>
                                <div className="ideal-answer">
                                  <div>Ideal Answer (minimum):</div>
                                  <input
                                    type="number"
                                    style={{
                                      border: "1px solid grey",
                                      borderRadius: "7px",
                                    }}
                                    className="p-1 ps-3"
                                    placeholder="1"
                                  />
                                </div>
                                <div className="required">
                                  <input type="checkbox" id="required-q" />{" "}
                                  <label htmlFor="required-q">
                                    Required qualification?
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item mb-20">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Do you have a driver's license?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body answer-item gap-3 d-flex align-items-start justify-content-between">
                                <div className="ideal-answer">
                                  <div>Ideal Answer:</div>
                                  <b>Yes</b>
                                </div>
                                <div className="required">
                                  <input type="checkbox" id="required-q" />{" "}
                                  <label htmlFor="required-q">
                                    Required qualification?
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item mb-20">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Are you comfortable working in a remote setting?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body answer-item gap-3 d-flex align-items-start justify-content-between">
                                <div className="ideal-answer">
                                  <div>Ideal Answer:</div>
                                  <b>Yes</b>
                                </div>
                                <div className="required">
                                  <input type="checkbox" id="required-q" />{" "}
                                  <label htmlFor="required-q">
                                    Required qualification?
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div class="accordion-item mb-20">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Are you willing to undergo a background check in
                                accordance with local law/regulations?
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body answer-item gap-3 d-flex align-items-start justify-content-between">
                                <div className="ideal-answer">
                                  <div>Ideal Answer:</div>
                                  <b>Yes</b>
                                </div>
                                <div className="required">
                                  <input type="checkbox" id="required-q" />{" "}
                                  <label htmlFor="required-q">
                                    Required qualification?
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <p>Add screening questions:</p>
                    <div className="question-pool">
                      <div className="question-pill">+ Education</div>
                      <div className="question-pill">+ Onsite Work</div>
                      <div className="question-pill">
                        + Expertise with Skill
                      </div>
                      <div className="question-pill">+ Industry Experience</div>
                      <div className="question-pill">+ Visa Status</div>
                      <div className="question-pill selected-pill">
                        + Custom Question
                      </div>
                    </div>
                  </div>

                  <header className="mt-4">
                    <h5>Qualification Setting</h5>
                    <div className="d-flexh align-items-start gap-2">
                      <input type="checkbox" id="sendRejection" />{" "}
                      <label htmlFor="sendRejection">
                        Filter out and send rejections to applicants who don't
                        meet any required qualifications?
                      </label>
                    </div>
                  </header>

                  <div className="col-md-12 mt-5">
                    <div className="form-inner">
                      <button
                        className="primry-btn-2 lg-btn w-unset"
                        type="submit"
                      >
                        Post Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JobPost2;
