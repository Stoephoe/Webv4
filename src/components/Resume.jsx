import React from "react";
import resumeFile from "../documents/Resume.zip";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2019 - 2023",
      title: "Bachelor Degree",
      place: "Amsterdam University of Applied Sciences",
      desc: "Mechanical engineering, During this program, I've learned to apply knowledge of mathematics and physics to conceptualize, design, create, and enhance things. These are all endeavors aimed at making people's everyday lives easier, safer, and more enjoyable. Additionally, it's about ensuring that the world becomes progressively more sustainable.",
    },

  ];

  const experienceDetails = [
    {
      yearRange: "2018 - 2020",
      title: "Theater Technician",
      place: "FluXus",
      desc: "In my previous role as a Theater Technician, I was responsible for setting up and maintaining technical equipment, providing crucial support during rehearsals and live shows, operating lighting and sound equipment proficiently, swiftly resolving technical issues, ensuring strict safety compliance, and collaborating effectively with the production team and performers to enhance the overall experience.",
    },
    {
      yearRange: "2022 - 2022",
      title: "Mechanical Engineer",
      place: "Forbo Flooring Systems",
      desc: "I ended up at Forbo as an intern in mechanical engineering and here I got my first taste of the real business world. After my internship, I continued to work at Forbo for some time. At Forbo, I worked on the preparation for a large-scale and impactful project. Additionally, I independently executed several smaller projects. The content of these projects varied, from analyzing a new structure and creating 3D models to conducting interviews with operators in the field. This experience greatly enhanced my understanding and skills in the field of mechanical engineering.",
    },
    {
      yearRange: "2020 - 2023",
      title: "Mechanical Engineer",
      place: "Cleanmobility",
      desc: "The Cleanmobility project typically lasts one academic year, but I felt that a single year wasn't sufficient for my learning journey. In my fourth year of study, I dedicated an entire year to a specific challenge: developing turbine blades for an innovative upwind vehicle for the Aeolus race. My responsibilities covered the complete blade development process, from researching optimal shapes to producing the final product. Outside of my thesis work, I participated in various projects during my studies, including contributing to the design of a new solar boat, working on propeller blade design, and being part of the upwind car team. In my fourth year, I was also involved in developing a new upwind car and assisting with mechanical systems for hydrogen and autonomous cars in the Shell Eco-Marathon. Additionally, I provided support for the solar boat project.",
    },
  ];

  const skills = [
    {
      name: "Inventor",
      percent: 95,
    },
    {
      name: "Fusion 360",
      percent: 95,
    },
    {
      name: "AutoCad",
      percent: 75,
    },
    {
      name: "Rhino",
      percent: 70,
    },
    {
      name: "Ansys",
      percent: 40,
    },
    {
      name: "Matlab",
      percent: 25,
    },
    {
      name: "LaTeX",
      percent: 50,
    },
    {
      name: "Python",
      percent: 40,
    },
    {
      name: "C programming",
      percent: 25,
    },
    {
      name: "HTML/CSS",
      percent: 25,
    },
    {
      name: "Java Script",
      percent: 20,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-light opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
