import { packagesText } from "~/constants/texts"
import Package from "./Package"

const Pricing = () => {
  return (
    <div id="pricing" className="flex flex-col items-center py-[5rem] Pricing-Container">
      <div className="flex flex-col md:flex-row justify-evenly gap-[2rem] md:gap-[1rem] w-[85%] md:w-[90%] overflow-x-auto">
        {packagesText.map((pack, idx) => (
          <Package key={idx} packageName={pack.packageName} packageDesc={pack.packageDesc} details={pack.details} price={pack.price} />
        ))}
      </div>
    </div>
  )
}

export default Pricing