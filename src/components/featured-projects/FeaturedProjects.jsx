import Link from "next/link";
import { default as React, useMemo, useState } from "react";
import Slider from "react-slick";
function FeaturedProjects() {
  const slider = useMemo(() => {
    return {
      rows: 3,
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    };
  }, []);

  const [projects] = useState([
    2,
    3,
    23,
    12,
    32,
    12,
    32,
    21,
    21,
    12,
    2,
    423,
    12,
    32,
    12,
    342,
    12,
    12,
    32,
    ,
    12,
    323,
  ]);

  return (
    <div className="home1-top-recruiters mb-120 mt-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12 d-flex flex-wrap align-items-end justify-content-md-between justify-content-start gap-3">
            <div className="section-title1">
              <h2>
                Our Featured <span>Projects</span>
              </h2>
              <p>
                Discover Your Trending Project Dream &amp; Illuminate Your
                Future.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slick-wrapper">
            <Slider {...slider} id="slick1">
              {projects.map((project, i) => {
                return (
                  <div className="slide-item">
                    <div className="recruters-card">
                      <div className="company-area">
                        <div className="logo">
                          <img
                            src="assets/images/bg/company-logo/company-06.png"
                            alt=""
                          />
                        </div>
                        <div className="name-location">
                          <h5>
                            <Link legacyBehavior href="/company-listing1">
                              <a>Frontend Developer</a>
                            </Link>
                          </h5>
                          <p>
                            <img src="assets/images/icon/location.svg" alt="" />{" "}
                            New-York, USA
                          </p>
                          <p>
                            <img src="assets/images/icon/person-2.svg" alt="" />{" "}
                            45/50 Bids
                          </p>
                        </div>
                      </div>
                      <div className="job-details-vacancies">
                        <div className="apply-btn ">
                          <Link legacyBehavior href="/company-details">
                            <a>
                              <span>
                                <img
                                  src="assets/images/icon/apply-ellipse.svg"
                                  alt=""
                                />
                              </span>
                              Preview
                            </a>
                          </Link>
                        </div>
                        <div className="vacancies deadline ">
                          <p>
                            Deadline: <span>Dec. 12, 2023</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-07.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 32
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>13</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-08.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Techman Digita</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 35
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-09.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tario.Co Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 55
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>33</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 45
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>21</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-07.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 32
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>13</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-08.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Techman Digita</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 35
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-09.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tario.Co Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 55
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>33</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-06.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Norland Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        New-York, USA
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 45
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>21</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-07.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Germaine Company</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Chicago, Australia
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 32
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>13</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-08.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Techman Digita</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Dhaka, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 35
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>15</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="recruters-card">
                  <div className="company-area">
                    <div className="logo">
                      <img
                        src="assets/images/bg/company-logo/company-09.png"
                        alt=""
                      />
                    </div>
                    <div className="name-location">
                      <h5>
                        <Link legacyBehavior href="/company-listing1">
                          <a>Tario.Co Ltd</a>
                        </Link>
                      </h5>
                      <p>
                        <img src="assets/images/icon/location.svg" alt="" />{" "}
                        Sylhet, Bangladesh
                      </p>
                      <p>
                        <img src="assets/images/icon/person-2.svg" alt="" /> 55
                        People
                      </p>
                    </div>
                  </div>
                  <div className="job-details-vacancies">
                    <div className="apply-btn">
                      <Link legacyBehavior href="/company-details">
                        <a>
                          <span>
                            <img
                              src="assets/images/icon/apply-ellipse.svg"
                              alt=""
                            />
                          </span>
                          View Details
                        </a>
                      </Link>
                    </div>
                    <div className="vacancies">
                      <p>
                        Vacancies: <span>33</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
