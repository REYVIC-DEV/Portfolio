import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Page2 } from "./pages/Page2"
import { Layout } from "./Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
