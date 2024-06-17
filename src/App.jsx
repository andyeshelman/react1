import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import ImageOne from "./ImageOne"
import ImageTwo from "./ImageTwo"
import ImageThree from "./ImageThree"
import "./style.css"

function App() {

  return (
    <>
     <Header/>
     <About/>
     <Contact/>
     <div id="gallery">
      <ImageOne/>
      <ImageTwo/>
      <ImageThree/>
     </div>
    </>
  )
}

export default App
