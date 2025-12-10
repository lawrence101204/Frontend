import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import TourPage from "./pages/ToursPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <Navbar />
     <main className="flex-1 max-w-6xl mx-auto w-full pb-10 px-4">
        <TourPage />
      </main>
      <Footer />
    </div>
  );
}