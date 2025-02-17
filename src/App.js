import { Button } from "react-bootstrap"
import NavbarComponent from "./navbar/NavbarComponent"
import LandingPage from "./landingPage/LandingPage"
import ServiceComponent from "./services/Service"

function App() {
  return (
    <div className="App bg-[#CAF0F8]">
      {/* <Button variant="primary">Click Me</Button>

      <h1 className="text-xl font-light text-blue-500">Tailwind CSS Test</h1> */}
      <NavbarComponent />
      <LandingPage></LandingPage>
      <ServiceComponent></ServiceComponent>
    </div>
  )
}

export default App
