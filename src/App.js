import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/homePage';
import { Convert } from './pages/convertPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="convert" element={<Convert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;