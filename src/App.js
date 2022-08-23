import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Components/home/home";
import Header from "./Components/header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
