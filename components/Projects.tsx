import { projectsText } from "~/constants/texts"
import { useState, useEffect } from "react"

const Projects = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [currentProjectIdx, setCurrentProjectIdx] = useState(0);

  useEffect(() => {
    setCurrentImgIdx(0);
  }, [currentProjectIdx]);

  const project = projectsText[currentProjectIdx];
  const images = project.imgs.map((img, idx) => ({src: img, alt: `${project.title} project, image ${idx + 1}`}));

  const GoToPrevious = () => {
    setCurrentImgIdx((prevIndex) =>
      prevIndex === 0 ? project.imgs.length - 1 : prevIndex - 1
    );
  };

  const GoToNext = () => {
    setCurrentImgIdx((prevIndex) => prevIndex === project.imgs.length - 1 ? 0 : prevIndex + 1);
  };

  const NextProject = () => {
    setCurrentProjectIdx((prevIndex) => prevIndex === projectsText.length - 1 ? 0 : prevIndex + 1);
  };

  const PreviousProject = () => {
    setCurrentProjectIdx((prevIndex) => prevIndex === 0 ? projectsText.length - 1 : prevIndex - 1);
  }

  return (
    <div className="Projects-Container">
        <div className="Project-Card w-[85%] md:w-[70%] gap-[1rem]" id="projects">
            <div className="flex items-center justify-between w-full">
                <p onClick={PreviousProject} className="cursor-pointer text-[0.75rem] md:text-[1rem]">👈Prev</p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-bold">{project.title}</h2>
                <p onClick={NextProject} className="cursor-pointer text-[0.75rem] md:text-[1rem]">Next👉</p>
            </div>
            <div className="Carousel">
                <img src={project.imgs[currentImgIdx]} alt={``}/>
                <button onClick={GoToPrevious} className="Carousel-prevBtn text-red-500">&larr;</button>
                <button onClick={GoToNext} className="Carousel-nextBtn text-red-500">&rarr;</button>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black p-2 rounded opacity-75">
                {images.map((_, index) => (
                    <button key={index} onClick={() => setCurrentImgIdx(index)} className={`w-3 h-3 rounded-full ${index === currentImgIdx ? "bg-red-500" : "bg-gray-800 bg-opacity-50"}`}/>
                ))}
                </div>
            </div>
            <div className="Desc">
                <p className="text-[1rem] md:text-[1.1rem] font-bold italic leading-7">{project.desc}</p>
            </div>
            <div className="flex flex-wrap items-center w-full gap-[0.5rem]">
                {project.tags.map((tag, idx) => (
                    <span className="text-[0.5rem] md:text-[0.6rem] font-bold tracking-wider px-[1rem] py-[0.5rem] Tag" key={idx}>{tag}</span>
                ))}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-[0.5rem] mt-[1rem] text-[0.75rem] md:text-[1.2rem]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-globe" viewBox="0 0 16 16">
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                </svg>
                <a href={project.pageLink} target="_blank" className="WebLink">{project.pageLink.split('//')[1]}</a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects