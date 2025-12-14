import { useEffect, useState } from "react";
import {
  getInquiries,
  deleteInquiry as deleteInquiryMock,
} from "../../mock/data.js";

  return (
     <button
                onClick={() => deleteInquiry(inq.id)}
                className="px-4 py-1 rounded-full border border-red-300 text-red-600 hover:bg-red-50 text-xs"
              >
                Delete
              </button>
  )

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Inquiries</h2>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {inquiries.map((inq) => (
          <div
            key={inq.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col justify-between text-sm"
          >
            <div>
              <p>
                <span className="font-semibold">Name:</span> {inq.name}
              </p>
              <p>
                <span className="font-semibold">Package:</span>{" "}
                {inq.package_name} ₱{" "}
                {inq.price ? Number(inq.price).toLocaleString() : "10,000"}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {inq.email}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Status :</span>{" "}
                {inq.status || "Available"}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3">
              <button
                onClick={() => openView(inq)}
                className="px-4 py-1 rounded-full bg-[#d3ebd7] hover:bg-[#c1dfc7] text-xs font-medium"
              >
                view
              </button>
              <button
                onClick={() => deleteInquiry(inq.id)}
                className="px-4 py-1 rounded-full border border-red-300 text-red-600 hover:bg-red-50 text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        </div>

        {inquiries.length === 0 && (
          <p className="text-sm text-gray-500 col-span-full">
            No inquiries yet.
          </p>
        )}
      </div>
  );
