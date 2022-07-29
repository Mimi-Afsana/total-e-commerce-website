import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto  ">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
