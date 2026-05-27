import { Nav, MobileNav } from "./index";

const Intro = () => {
  return (
    <div className="Intro">
        <div className="hidden md:block">
            <Nav />
        </div>
        <div className="block md:hidden">
            <MobileNav />
        </div>

        <div className="flex flex-col items-center justify-center h-[90dvh]">
            <div className="text-center w-[70%] md:w-[50%]">
                <h1 className="text-[1.75rem] md:text-[3rem] font-bold">The web developer who turns <span className="italic underline">YOUR</span> ideas into reality!</h1>
                <p className="text-[1rem] md:text-[1.25rem] font-bold italic tracking-wider leading-loose">From landing pages to full-stack web apps, I create fast, scalable and conversion-focused web solutions tailored to your needs and goals - with clean code, modern UI/UX and reliable performance.</p>
            </div>
        </div>      
    </div>
  )
}

export default Intro