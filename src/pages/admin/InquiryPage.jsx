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