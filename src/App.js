import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      {/* <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact /> */}
      <Contactus/>
      <Card />
      {/* <Footer /> */}
    </div>
  );
}

export default App;