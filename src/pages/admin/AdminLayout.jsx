import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PackagePage from "./PackagePage.jsx";
import InquiryPage from "./InquiryPage.jsx";

export default function AdminLayout() {
  const [tab, setTab] = useState("package");
  const navigate = useNavigate();
  };

  return (
    <main className="px-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("package")}
            className={`px-5 py-2 rounded-full text-sm font-medium ${
              tab === "package"
                ? "bg-[#d3ebd7] text-gray-800"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            Package
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-400 text-sm hover:bg-gray-50">
             Inquiry
        </button>
        </div>

        <button className="px-4 py-2 rounded-full border border-gray-400 text-sm hover:bg-gray-50">
            Sign out
        </button>
      </div>

      {tab === "package" ? <PackagePage /> : <InquiryPage />}
    </main>
  );
}