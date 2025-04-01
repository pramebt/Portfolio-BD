"use client";
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div id="projects" className="border w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20">
      {/* หัวข้อ Projects */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-8 text-base md:text-lg">Projects</p>
      
      {/* กริดแสดงโปรเจกต์ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {[
          { title: 'Frontend Project', subtitle: 'Web Design', link: 'https://www.google.com' },
          { title: 'App Project', subtitle: 'App Design', link: 'https://www.github.com' },
          { title: 'Frontend Project', subtitle: 'App Design', link: 'https://www.stackoverflow.com' }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-[url('/assets/bg/background.jpg')] aspect-square bg-cover bg-center bg-no-repeat p-5 rounded-lg w-full h-auto"
          >
            {/* ใช้ Link คลุมกล่องสีขาวทั้งหมด */}
            <Link href={project.link} target="_blank">
              <div
                className="bg-white rounded-md left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
                transition duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div>
                  <h2 className="text-sm md:text-base">{project.title}</h2>
                  <h2 className="text-sm md:text-base">{project.subtitle}</h2>
                </div>
                <Image src="/assets/code-icon.png" alt="code icon" width={20} height={20} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
