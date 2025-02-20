import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Header } from "./component/header"
import { Feature } from "./component/feature"
import { Pricing } from "./component/pricing"
import {Workflow} from "./component/workflow"
import { About } from "./component/about"
import { Footer } from "./component/footer"
import { Home } from "./component/home"
function App() {


  return (
    <>
      <div className="container1">
     <Header/>
      <Home/>
     <Feature/>
     <Pricing/>
     <Workflow/>
     <About/>
     <Footer/>
      </div>

      </>
  )
}

export default App
