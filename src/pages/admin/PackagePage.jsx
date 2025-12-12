import { useEffect, useState } from "react";

export default function PackagePage() {
  const [tours, setTours] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const loadTours = async () => {
    try {
      const data = await getTours();
      setTours(Array.isArray(data) ? data : []);
      if (!selectedId && data.length) setSelectedId(data[0].id);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTours();
  }, []);

  const openAdd = () => {
    setEditingTour(null);
    setModalOpen(true);
  };

  const openEditSelected = () => {
    const tour = tours.find((t) => t.id === selectedId);
    if (!tour) return alert("No tour selected");
    setEditingTour(tour);
    setModalOpen(true);
  };
}