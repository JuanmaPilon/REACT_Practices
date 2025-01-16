import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Favs from "./pages/Favs.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fav" element={<Favs />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
