import { scrollToSection } from "~/lib/utils"

const Package = ({ packageName, packageDesc, details, price }: PackageProps) => {
  return (
    <div className="flex flex-col items-center w-full md:w-[30%] gap-[1rem] Package-Card">
      <div className="Package-Title">
        <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold uppercase mb-[1rem]">{packageName}</h2>
        <p className="text-[1rem] text-red-500 font-bold italic">{packageDesc}</p>
      </div>
      <div>
        <ul className="flex flex-col items-center gap-[0.5rem]">
            {details.map((detail, idx) => <li className="text-[1rem] text-center italic" key={idx}>{detail}</li>)}
        </ul>
      </div>
      <div className="Package-Inquiry">
        <p className="text-[1.2rem] text-center font-bold italic">{price}</p>
        <button className="CTABtn uppercase" onClick={() => scrollToSection('contact')}>Get in touch</button>
      </div>
      <div>
        <p className="text-[1.2rem] text-center italic">First time client gets <span className="text-red-500">15%</span> off!</p>
      </div>
    </div>
  )
}

export default Package