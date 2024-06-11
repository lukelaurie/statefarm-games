import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import CarPage from "./Components/Pages/CarPage";
import TriviaPage from "./Components/Pages/TriviaPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Switches to correct route based on the url */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car" element={<CarPage />} />
        <Route path="/trivia" element={<TriviaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
