import { auto } from "@popperjs/core";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

const ProjectDetailsModal = ({ darkTheme, projectDetails }) => {
  const sliderRef = useRef();

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    sliderRef.current.slickGoTo(0);
  }, [projectDetails]);

  return (
    <>
      <div
        className="modal fade bg-dark-1"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div
            className={
              "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
            }
          >
            <div className="modal-body">
              <button
                type="button"
                className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div
                className={
                  "container ajax-container " +
                  (darkTheme ? "bg-dark-2 text-light" : "")
                }
              >
                <h2
                  className={
                    "text-6 font-weight-600 text-center mb-4" +
                    (darkTheme ? " text-white" : "")
                  }
                >
                  {projectDetails?.title}
                </h2>
                <div className="row g-4">
                  <div className="col-xl-15">
                    <Slider {...settings} ref={sliderRef}>
                      <div className="item">
                        <img
                          className="img-fluid"
                          alt=""
                          src={projectDetails?.thumbImage}
                        />
                      </div>
                      {projectDetails?.sliderImages?.length > 0 &&
                        projectDetails?.sliderImages?.map((image, index) => (
                          <div className="item" key={index}>
                            <img className="img-fluid" alt="" src={image} />
                          </div>
                        ))}
                    </Slider>
                  </div>
                  <div className="col-xl-15">
                    <h4
                      className={
                        "text-4 font-weight-600" +
                        (darkTheme ? " text-white" : "")
                      }
                    >
                      Project Info:
                    </h4>
                    <div class="container">
                        <iframe
                        title="test"
                        id="myFrame"
                        src={projectDetails?.projectInfo}

                        width="100%"
                        height={600}
                        scrolling="yes"
                        frameBorder="0"
                        style={{
                          maxWidth: auto,
                          width: "100%",
                          overflow: "auto",
                        }}
                      ></iframe>
                    </div>
                    <h4
                    >
                      Project Details:
                    </h4>
                    <ul
                      className={
                        "list-style-2 " + (darkTheme ? "list-style-light" : "")
                      }
                    >
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Client:
                        </span>
                        {projectDetails?.client}
                      </li>
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Technologies:
                        </span>
                        {projectDetails?.technologies}
                      </li>
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Industry:
                        </span>
                        {projectDetails?.industry}
                      </li>
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          Date:
                        </span>
                        {projectDetails?.date}
                      </li>
                      <li>
                        <span
                          className={
                            "text-dark font-weight-600 me-2" +
                            (darkTheme ? " text-white" : "")
                          }
                        >
                          URL:
                        </span>
                        <a
                          href={projectDetails?.url?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {projectDetails?.url?.name}
                        </a>
                        </li>
                        
                      </ul>
                  </div>
                      <div className="col-xl-15">
                      <iframe
                        title="test"
                        id="myFrame"
                        src={projectDetails?.files}

                        width="100%"
                        height={75}
                        scrolling="no"
                        frameBorder="0"
                        style={{
                          width: "100%",
                          overflow: "auto",
                        }}
                      ></iframe>
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

export default ProjectDetailsModal;
