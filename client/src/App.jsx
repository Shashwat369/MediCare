import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Import Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/User/UserDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Pages WITH Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        {/* Pages WITHOUT Navbar */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* User Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoutes>
              <UserDashboard />
            </ProtectedRoutes>
          } 
        />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;