import { useEffect, useState } from "react";
import TourCard from "../components/TourCard.jsx";

  export default function ToursPage() {
  const [tours, setTours] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // NEW: filter + sort state
  const [typeFilter, setTypeFilter] = useState("All types");
  const [sortBy, setSortBy] = useState("recommendation"); // recommendation | price-asc | price-desc | duration-asc | name-asc

  const [selectedTour, setSelectedTour] = useState(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [detailsTour, setDetailsTour] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const loadTours = async () => {
    try {
      const data = await getTours();
      const safe = Array.isArray(data) ? data : [];
      setTours(safe);
      setFiltered(safe);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <main className="px-6">
      {/* Filters & search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
        {/* LEFT SIDE FILTERS */}
        <div className="flex flex-wrap items-center gap-3">
          {/* TYPE FILTER */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-[7px] text-xs pr-8 shadow-sm">
              <option>All types</option>
              <option>Historical</option>
              <option>Educational</option>
              <option>Leisure</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▾
            </span>
          </div>

          {/* SORT FILTER */}
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-[7px] text-xs pr-8 shadow-sm">
              <option value="recommendation">Sort: recommendation</option>
              <option value="price-asc">Price: low → high</option>
              <option value="price-desc">Price: high → low</option>
              <option value="duration-asc">Duration: short → long</option>
              <option value="name-asc">Name: A → Z</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              ▾
            </span>
          </div>
        </div>

        {/* RIGHT SIDE SEARCH BAR */}
        <div className="flex-1 md:max-w-md">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
            <span className="text-gray-400 mr-2">🔎︎</span>
            <input
              type="text"
              placeholder="Search tours or destination"
              className="flex-1 text-sm bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* TOUR GRID */}
      <div className="grid grid-cols-4 gap-4"></div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <TourCard />
      </div>
    </main>
  );
}