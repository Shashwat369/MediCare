import Navbar from "./components/Navbar";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
