import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import HomePage from "./Page Componenets/Home";
import GamingPage from "./Page Componenets/Gaming";
import AboutPage from "./Page Componenets/About";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Gaming" element={<GamingPage />} />
        <Route exact path="/About" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
