
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Art from "./pages/Art.tsx"
import Projects from "./pages/Projects.tsx"

function App()
{
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/art" element={<Art />} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;

