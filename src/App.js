import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Broadcast from "./components/Broadcast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Broadcast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
