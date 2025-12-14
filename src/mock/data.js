export let tours = [
  {
    id: 1,
    name: "Cebu City Heritage Tour",
    type: "Historical",
    locations: "Magellan's Cross · Basilica del Sto. Niño · Fort San Pedro",
    price: 1500,
    duration: "7h 30m",
    inclusions: "Air-conditioned bus, local guide, entrance fees",
    details: "Discover Cebu City's rich cultural and religious history with a full-day guided tour.",
  },
  {
    id: 2,
    name: "South Cebu Adventure",
    type: "Adventure",
    locations: "Oslob · Tumalog Falls · Sumilon Island",
    price: 2600,
    duration: "10h",
    inclusions: "Private transport, boat transfers, life vests",
    details: "Experience whale watching, waterfalls, and an island escape in one packed adventure.",
  },
  {
    id: 3,
    name: "Island Hopping Getaway",
    type: "Island",
    locations: "Mactan · Hilutungan · Nalusuan",
    price: 2300,
    duration: "6h",
    inclusions: "Boat rental, snorkel gear, lunch",
    details: "Relaxing island hopping with clear waters perfect for snorkeling and swimming.",
  }
];

export let inquiries  = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    message: "Hi, can I get the full itinerary for the heritage tour?",
    status: "Pending",
    type: "Historical",
    package_name: "Cebu City Heritage Tour",
    locations: "Magellan's Cross · Basilica del Sto. Niño · Fort San Pedro",
    createdAt: "2025-01-10 09:30 AM",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    message: "Do you have weekday discounts for groups?",
    status: "Replied",
    type: "Island",
    package_name: "Island Hopping Getaway",
    locations: "Mactan · Hilutungan · Nalusuan",
    createdAt: "2025-01-11 02:15 PM",
  }
];



function nextId(list) {
  return list.length ? Math.max(...list.map((item) => Number(item.id) || 0)) + 1 : 1;
}

export function getTours() {
  return Promise.resolve([...tours]);
}

export function saveTour(payload, id) {
  if (id) {
    tours = tours.map((t) =>
      Number(t.id) === Number(id) ? { ...t, ...payload, id } : t
    );
  } else {
    const newId = nextId(tours);
    const newTour = { id: newId, ...payload };
    tours = [...tours, newTour];
  }
  return Promise.resolve();
}

export function deleteTour(id) {
  tours = tours.filter((t) => Number(t.id) !== Number(id));
  return Promise.resolve();
}

export function getInquiries() {
  return Promise.resolve([...inquiries]);
}

export function addInquiry(payload) {
  const id = nextId(inquiries);
  const createdAt = new Date().toLocaleString();
  const full = { id, status: "Pending", createdAt, ...payload };
  inquiries = [full, ...inquiries];
  return Promise.resolve(full);
}

export function deleteInquiry(id) {
  inquiries = inquiries.filter((inq) => Number(inq.id) !== Number(id));
  return Promise.resolve();
}