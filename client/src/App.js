import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, path } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import "antd/dist/antd.css";
import Bookingscreen from "./screens/Bookingscreen";
import Profilescreen from "./screens/Profilescreen";
import Landingscreen from "./screens/Landingscreen";
import Adminscreen from "./screens/Adminscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landingscreen />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route
            path="/book/:roomid/:fromdate/:todate"
            element={<Bookingscreen />}
          />
          <Route path="/profile" element={<Profilescreen />} />
          <Route path="/admin" element={<Adminscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
