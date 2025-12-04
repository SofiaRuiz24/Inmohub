import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, SearchPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/buy" element={<div>Buy Page</div>} />
      <Route path="/sell" element={<div>Sell Page</div>} />
      <Route path="/listing" element={<div>Listing Page</div>} />
      <Route path="/pages" element={<div>Pages</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
    </Routes>
  );
}

export default App;
