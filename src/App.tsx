
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Poetry from "./pages/poetry.tsx"
import Projects from "./pages/Projects.tsx"

function App()
{
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/poetry" element={<Poetry />} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;

