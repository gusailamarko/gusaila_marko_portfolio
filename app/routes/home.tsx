import { useEffect } from "react"
import { Contact, Intro, Pricing, Projects, Footer } from "../../components"
import { setMetaTag } from "~/lib/utils"

const home = () => {
  useEffect(() => {
      setMetaTag("Gusaila Márkó - Portfolio", "Portfolio of web developer: Gusaila Márkó", "/icons/portfolio_icon.ico");
    }, []);

  return (
    <main>
      <Intro />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default home