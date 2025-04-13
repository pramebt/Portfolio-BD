"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const projects = [
    // {
    //   title: "ADD PROJECT",
    //   subtitle: " ",
    //   link: "https://www.stackoverflow.com",
    //   image: "/assets/bg/Frontend-project.png",
    // },
    {
      title: "Age Calculator",
      subtitle: "Calculate age from day, month, year (AD)",
      link: "https://age-calculator-bd.vercel.app/",
      image: "/assets/bg/Age-cal.png",
    },
    {
      title: "Ticket Ganerate",
      subtitle: "Ticket Ganerate",
      link: "https://ticket-generate-bd.vercel.app/",
      image: "/assets/bg/Editing.png",
    },
    {
      title: "ADD PROJECT",
      subtitle: " ",
      link: "https://www.stackoverflow.com",
      image: "/assets/bg/Frontend-project.png",
    },
    
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // listen for changes
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects = showMore ? projects : projects.slice(0, visibleCount);

  return (
    <div
      id="projects"
      className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg">
        Projects
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-cover bg-center bg-no-repeat p-5 rounded-lg w-full h-auto"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <Link href={project.link} target="_blank">
              <div
                className="bg-white/70 rounded-md left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
                transition duration-500 hover:-translate-y-2 cursor-pointer mt-40"
              >
                <div>
                  <h2 className="font-semibold md:text-base">
                    {project.title}
                  </h2>
                  <h2 className="text-sm md:text-base">{project.subtitle}</h2>
                </div>
                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                shadow-[2px_2px_0_#000]  group-hover:bg-lime-300 transition"
                >
                  <Image
                    src="/assets/code-icon.png"
                    alt="code icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="w-max flex gap-2 items-center justify-center text-gray-700 border-[0.5px] rounded-full px-10 py-3 mx-auto transition hover:bg-gray-100"
        >
          Show more
          <Image
            src="/assets/right-arrow.png"
            alt="right arrow"
            width={15}
            height={15}
          />
        </button>
      )}
    </div>
  );
};

export default Projects;
