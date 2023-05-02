import Login from "./pages/Login";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  return(
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Register/>} />
          </Routes>
        </HashRouter>
    </div>
  )
}

export default App;