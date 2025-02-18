import { Button } from "react-bootstrap"
import NavbarComponent from "./navbar/NavbarComponent"
import LandingPage from "./landingPage/LandingPage"
import ServiceComponent from "./services/Service"
import AboutComponent from "./about/about"
import ExperienceComponent from "./experience/Experience"
import OurWorkComponent from "./ourWork/OurWork"
import TeamComponent from "./team/team"
import OurClientComponent from "./ourClient/OurClient"

function App() {
  return (
    <div className="App bg-blue8">
      {/* <Button variant="primary">Click Me</Button>

      <h1 className="text-xl font-light text-blue-500">Tailwind CSS Test</h1> */}
      <NavbarComponent />
      <LandingPage></LandingPage>
      <ServiceComponent></ServiceComponent>
      <AboutComponent></AboutComponent>
      <ExperienceComponent></ExperienceComponent>
      <OurWorkComponent></OurWorkComponent>
      <TeamComponent></TeamComponent>
      <OurClientComponent></OurClientComponent>
    </div>
  )
}

export default App
