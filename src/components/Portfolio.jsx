import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    School: "School",
    Cleanmobility: "Cleanmobility",
    Personal: "Personal",
    Theater: "Theater",
    Work:"Work",
  };

  const projectsData = [
    {
      title: "Solarboat",
      projectInfo:"portfolio/project1.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion",
      industry: "Design, Engineering and Production",
      date: "August 24, 2021",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project1/project1 (3).jpg",
      sliderImages: [
        "images/projects/project1/project1 (1).PNG",
        "images/projects/project1/project1 (4).jpg",
        "images/projects/project1/project1 (5).jpg",
        "images/projects/project1/project1 (8).jpg",
        "images/projects/project1/project1 (9).jpg",
        "images/projects/project1/project1 (10).jpg",
        "images/projects/project1/project1 (1).jpg",
        "images/projects/project1/project1 (2).jpg",
        "images/projects/project1/project1 (6).jpg",
        "images/projects/project1/project1 (7).jpg",
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Mini transat boat",
      projectInfo:"portfolio/project2.html",
      client: "Yachts and Small Craft Rotterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Ansys, Rhino, AutoCad, Maxsurf",
      industry: "Design, Engineering and Production",
      date: "January 20, 2022",

    
      thumbImage: "images/projects/project2/9.jpeg",
      sliderImages: [
        "images/projects/project2/1.PNG",
        "images/projects/project2/2.PNG",
        "images/projects/project2/3.PNG",
        "images/projects/project2/4.jpg",
        "images/projects/project2/5.jpeg",
        "images/projects/project2/6.jpeg",
        "images/projects/project2/7.jpeg",
        "images/projects/project2/8.jpeg",
,
      ],
      categories: [filters.School],
    },
    {
      title: "3D printer project",
      projectInfo:"portfolio/project3.html",
      client: "None",
      technologies: "Inventor, Fusion, AutoCad, Duet 3D, Prusa Slicer",
      industry: "Design, Engineering and Production",
      date: "Ongoing",

    
      thumbImage: "images/projects/project3/9.jpg",
      sliderImages: [
        "images/projects/project3/1.jpg",
        "images/projects/project3/3.jpg",
        "images/projects/project3/5.jpg",
        "images/projects/project3/6.jpg",
        "images/projects/project3/8.jpeg",
        "images/projects/project3/2.jpg",
        "images/projects/project3/10.jpeg",
        "images/projects/project3/11.jpeg",
        "images/projects/project3/12.jpeg",
        "images/projects/project3/7.jpg",
,
      ],
      categories: [filters.Personal],
    },
    {
      title: "Verkeerd Verbonden",
      projectInfo:"portfolio/project4.html",
      client: "Lieve de Boer",
      technologies: "Chamsys, SketchUp and Capture",
      industry: "Decor design, Lighting design and Lighting control",
      date: "November 21 2019",

    
      thumbImage: "images/projects/project4/8.jpg",
      sliderImages: [
        "images/projects/project4/2.jpg",
        "images/projects/project4/4.jpg",
        "images/projects/project4/6.jpg",
        "images/projects/project4/8.jpg",
        "images/projects/project4/9.jpg",
        "images/projects/project4/10.jpg",
        "images/projects/project4/12.jpg",
        "images/projects/project4/13.jpg",
        "images/projects/project4/14.jpg",
        "images/projects/project4/15.jpg",
        "images/projects/project4/16.jpg",
        "images/projects/project4/17.jpg",
        "images/projects/project4/18.jpg",
,
      ],
      categories: [filters.Theater],
    },
    {
      title: "Grease",
      projectInfo:"portfolio/project5.html",
      client: "Musical Zaanlands",
      technologies: "SketchUp",
      industry: "Decor design and manufacturing",
      date: "June 9 2018",

    
      thumbImage: "images/projects/project5/1.jpg",
      sliderImages: [
        "images/projects/project5/14.png",
        "images/projects/project5/15.png",
        "images/projects/project5/2.jpg",
        "images/projects/project5/3.jpg",
        "images/projects/project5/4.jpg",
        "images/projects/project5/12.jpeg",
        "images/projects/project5/13.jpeg",
        "images/projects/project5/5.jpg",
        "images/projects/project5/6.jpg",
        "images/projects/project5/7.jpg",
        "images/projects/project5/8.jpg",
        "images/projects/project5/9.jpg",
        "images/projects/project5/10.jpg",
        "images/projects/project5/11.jpg",
,
      ],
      categories: [filters.Theater],
    },
    {
      title: "ZL lightplan v1",
      projectInfo:"portfolio/project6.html",
      client: "Zaanlands Lyceum Vereniging",
      technologies: "Capture and Chamsys",
      industry: "Lighting design and controll",
      date: "Februari 20 2018",

    
      thumbImage: "images/projects/project6/5.jpg",
      sliderImages: [
        "images/projects/project6/1.jpg",
        "images/projects/project6/2.jpg",
        "images/projects/project6/3.jpg",
        "images/projects/project6/4.jpg",
        "images/projects/project6/6.jpg",
        "images/projects/project6/7.jpg",

      ],
      categories: [filters.Theater],
    },
    {
      title: "ZL lightplan v2",
      projectInfo:"portfolio/project7.html",
      client: "Zaanlands Lyceum Vereniging",
      technologies: "Capture and Chamsys",
      industry: "Lighting design and controll",
      date: "April 6 2019",

    
      thumbImage: "images/projects/project7/1.jpg",
      sliderImages: [
        "images/projects/project7/2.jpg",
      ],
      categories: [filters.Theater],
    },
    {
      title: "Propeller blades",
      projectInfo:"portfolio/project8.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "July 2, 2022",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project8/2.jpeg",
      sliderImages: [
        "images/projects/project8/1.PNG",
        "images/projects/project8/3.JPEG",
        "images/projects/project8/4.JPG",
        "images/projects/project8/5.JPG",
        "images/projects/project8/6.PNG",
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Hydrofoils",
      projectInfo:"portfolio/project9.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "July 2, 2022",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project9/2.jpg",
      sliderImages: [
        "images/projects/project9/1.PNG",
        "images/projects/project9/3.jpg",
        "images/projects/project9/5.PNG",
        "images/projects/project9/6.PNG",
        "images/projects/project9/7.PNG",       
        "images/projects/project9/8.jpg",
        "images/projects/project9/9.jpg",
        "images/projects/project9/10.jpg",
        "images/projects/project9/11.jpg",
        "images/projects/project9/12.jpg",
        "images/projects/project9/13.jpg",
        "images/projects/project9/14.jpg",
        "images/projects/project9/15.jpg",
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Rudder",
      projectInfo:"portfolio/project10.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "July 2, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project10/7.jpg",
      sliderImages: [
        "images/projects/project10/1.jpg",
        "images/projects/project10/2.jpg",
        "images/projects/project10/3.jpeg",
        "images/projects/project10/4.jpeg",
        "images/projects/project10/5.jpeg",
        "images/projects/project10/6.jpeg",
        "images/projects/project10/7.jpg",

,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Monaco Energy Boat Challange 2022",
      projectInfo:"portfolio/project11.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "July 9, 2022",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project11/2.jpg",
      sliderImages: [
        "images/projects/project11/1.jpg",
        "images/projects/project11/3.jpeg",
        "images/projects/project11/4.jpg",
        "images/projects/project11/5.jpg",
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Racing Aelous 2022",
      projectInfo:"portfolio/project12.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "August 24, 2022",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project12/1.jpg",
      sliderImages: [
        "images/projects/project12/2.jpeg",
        "images/projects/project12/3.jpg",
        "images/projects/project12/4.jpg",
        "images/projects/project12/5.jpg",
        "images/projects/project12/6.jpg",
        "images/projects/project12/7.jpg",
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Shell Eco Marathon 2023",
      projectInfo:"portfolio/project13.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "May 22, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project13/1.jpeg",
      sliderImages: [
        "images/projects/project13/2.jpeg",
        "images/projects/project13/3.jpeg",
        "images/projects/project13/4.jpg",
        "images/projects/project13/5.jpeg",
        "images/projects/project13/6.jpeg",

,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Racing Aeolus 2023",
      projectInfo:"portfolio/project14.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "August 22, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project14/1.jpg",
      sliderImages: [
        "images/projects/project14/2.jpg",
        "images/projects/project14/3.jpg",
        "images/projects/project14/4.jpg",
        "images/projects/project14/5.jpg",
        "images/projects/project14/6.jpg",
        "images/projects/project14/7.jpg",
        "images/projects/project14/8.jpg",
        "images/projects/project14/9.jpg",
        "images/projects/project14/10.jpg",      


,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Return of the Spirit",
      projectInfo:"portfolio/project15.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "August 22, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project15/1.jpg",
      sliderImages: [
        "images/projects/project15/2.jpg",
        "images/projects/project15/3.jpg",
        "images/projects/project15/4.jpg",
        "images/projects/project15/5.jpg",
        "images/projects/project15/6.jpg",
        "images/projects/project15/7.jpg",
        "images/projects/project15/8.jpg",
        "images/projects/project15/9.jpg",
        "images/projects/project15/10.jpg", 
        "images/projects/project15/11.jpg",           
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Monaco Energy Boat Challange 2023",
      projectInfo:"portfolio/project16.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "juli 9, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project16/1.jpg",
      sliderImages: [
        "images/projects/project16/2.jpg",
        "images/projects/project16/3.jpg",
        "images/projects/project16/4.jpg",
        "images/projects/project16/5.jpg",
        "images/projects/project16/6.jpg",
        "images/projects/project16/7.jpg",
        "images/projects/project16/8.jpg",
        "images/projects/project16/9.jpg",
        "images/projects/project16/10.jpg",
        "images/projects/project16/11.jpg",        
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Forbo Internship",
      projectInfo:"portfolio/project17.html",
      client: "Forbo Flooring Systems Assendelft",
      technologies: "Inventor, Fusion, Matlab and Eiger",
      industry: "Design, Engineering and Production",
      date: "September 1, 2022",
      url: {
        name: "https://www.forbo.com/flooring/nl-nl/",
        link: "https://www.forbo.com/flooring",
      },
    
      thumbImage: "images/projects/project17/1.jpg",
      sliderImages: [
        "images/projects/project17/2.jpg",
        "images/projects/project17/3.png",
        "images/projects/project17/4.png",
        "images/projects/project17/5.png",
        "images/projects/project17/6.png",
        "images/projects/project17/7.png",
        "images/projects/project17/8.png",
        "images/projects/project17/9.png",
        "images/projects/project17/10.jpg",
        "images/projects/project17/11.png",
        "images/projects/project17/12.png",  
        "images/projects/project17/13.png",  
        "images/projects/project17/14.png",       
        "images/projects/project17/15.jpg",       
,
      ],
      categories: [filters.Work],
    },
    {
      title: "Sisteract",
      projectInfo:"portfolio/project18.html",
      client: "Davinci college",
      technologies: "MagicQ, Capture",
      industry: "Lighting design and control",
      date: "July 10, 2019",
      url: {
        name: "https://davincimusical.nl/",
        link: "https://davincimusical.nl/",
      },
    
      thumbImage: "images/projects/project18/1.jpg",
      sliderImages: [
        "images/projects/project18/2.jpg",
        "images/projects/project18/3.jpg",
        "images/projects/project18/4.jpg",
        "images/projects/project18/5.jpg",  
,
      ],
      categories: [filters.Work, filters.Theater],
    },
    {
      title: "StoefoeBlade",
      projectInfo:"portfolio/project19.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Inventor, Fusion, AutoCad, Stoefoeblade and Qblade",
      industry: "Design, Engineering and Production",
      date: "june 29, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project19/1.jpg",
      sliderImages: [
        "images/projects/project19/2.jpg",
        "images/projects/project19/3.jpg",
        "images/projects/project19/4.jpg",
        "images/projects/project19/5.jpg",
        "images/projects/project19/6.jpg",
        "images/projects/project19/7.jpg",
        "images/projects/project19/8.jpg",
        "images/projects/project19/9.jpg",
        "images/projects/project19/10.jpg",
        "images/projects/project19/11.jpg",
        "images/projects/project19/12.jpg",
        "images/projects/project19/13.jpg",
        "images/projects/project19/14.jpg",
        "images/projects/project19/15.jpg",
 
,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
    {
      title: "Braccu",
      projectInfo:"portfolio/project20.html",
      client: "Cleanmobility Amsterdam University of Applied Sciences ",
      technologies: "Beunen",
      industry: "Beunen",
      date: "june 29, 2023",
      url: {
        name: "https://cleanmobilityhva.nl",
        link: "https://cleanmobilityhva.nl/",
      },
    
      thumbImage: "images/projects/project20/1.jpg",
      sliderImages: [
        "images/projects/project20/2.jpg",
        "images/projects/project20/3.jpg",
        "images/projects/project20/4.jpg",

,
      ],
      categories: [filters.Cleanmobility, filters.School],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
