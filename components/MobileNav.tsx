import { useRef } from "react"
import { scrollToSection } from "~/lib/utils";

const MobileNav = () => {
  const dropdown = useRef<HTMLDivElement>(null)

  const handleDropdown = () => {
    dropdown.current?.classList.toggle("hidden");
  }

  return (
    <div className="relative">
      <nav className="flex justify-between items-center h-[10dvh] px-[1rem] Nav">
          <div>
              <p className="text-[1.1rem] font-bold italic tracking-wide">Gusaila Márkó</p>
          </div>
          <div className="flex">
              <button onClick={handleDropdown} aria-expanded="false" aria-controls="mobile-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>
              </button>
          </div>
      </nav>

      <div id="mobile-menu" className="hidden absolute left-0 right-0 top-full bg-white z-50 flex flex-col justify-center items-center gap-[1rem] pb-3 shadow-md Nav" ref={dropdown}>
          <div className="text-center" onClick={() => scrollToSection("projects")}>
              <p className="text-[1rem] font-bold NavItem">Projects</p>
          </div>
          <div className="text-center" onClick={() => scrollToSection("pricing")}>
              <p className="text-[1rem] font-bold NavItem">Pricing</p>
          </div>
          <div className="text-center" onClick={() => scrollToSection("contact")}>
              <p className="text-[1rem] font-bold NavItem">Contact Me!</p>
          </div>
          <div className="w-[90%]">
            <button className="w-full NavBtn">
                <a href="/cv/gusaila_márkó_flórián.pdf" download="/cv/gusaila_márkó_flórián.pdf">Download CV</a>
            </button>
          </div>
      </div>
    </div>
  )
}

export default MobileNav