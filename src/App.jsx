import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ToursPage from "./pages/ToursPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import Footer from "./components/Footer.jsx";

const isAuthenticated = () =>
  localStorage.getItem("lavera_admin_token") === "lavera-admin-token";

export default function App() {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <Navbar />

      {/* Main content expands to push footer down */}
      <div className="max-w-6xl mx-auto flex-1 w-full">
        <Routes>
          <Route path="/" element={<ToursPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin/*"
            element={
              isAuthenticated() ? <AdminLayout /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>

      {/* Hide footer on admin pages */}
      {!hideFooter && <Footer />}
    </div>
  );
}