import { Contact, Intro, Pricing, Projects, Footer } from "../../components"

const home = () => {
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