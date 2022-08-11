import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navigation from "./components/Navigation"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from  "./pages/Contact"
import Projects from "./pages/Projects"

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
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      </Container>
    </div>
  )
}

export default App;