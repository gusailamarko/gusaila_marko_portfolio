import { scrollToSection } from "../app/lib/utils";

const Nav = () => {
  return (
    <nav className="flex justify-center md:justify-between items-center h-[10dvh] px-[1rem] Nav">
        <div>
            <p className="text-[1.5rem] font-bold italic tracking-wide">Gusaila Márkó</p>
        </div>
        <div className="hidden md:flex md:flex-row justify-evenly items-center gap-[1rem]">
            <div className="text-[1.1rem] font-bold NavItem" onClick={() => scrollToSection("projects")}>
                <p>Projects</p>
            </div>
            <div className="text-[1.1rem] font-bold NavItem" onClick={() => scrollToSection("pricing")}>
                <p>Pricing</p>
            </div>
            <div className="text-[1.1rem] font-bold NavItem" onClick={() => scrollToSection("contact")}>
                <p>Contact Me!</p>
            </div>
        </div>
        <div className="hidden md:flex">
            <div>
                <button className="NavBtn">
                    <a href="/cv/gusaila_márkó_flórián.pdf" download="/cv/gusaila_márkó_flórián.pdf">Download CV</a>
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav