import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from  "./pages/Contact"
import Projects from "./pages/Projects/Projects"
import Footer from "./components/Footer"
import Resume from "./pages/Resume/Resume"
import Portfolio from "./pages/Projects/Portfolio"


function App() {
  return (
    <div>
      <Navigation />
      <Container style={{ paddingTop: "50px" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      </Container>
      <Footer />
    </div>
  )
}

export default App;