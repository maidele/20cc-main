import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchTours = async () => {
    try {
      const response = await fetch("https://api.example.com/tours");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [setTours]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filteredTours =
    selectedCategory === "all"
      ? tours
      : tours.filter((tour) => tour.category === selectedCategory);

  return (
    <div className="gallery">
      <div className="filter">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="adventure">Adventure</option>
          <option value="cultural">Cultural</option>
          <option value="relaxation">Relaxation</option>
        </select>
      </div>
      {filteredTours.length === 0 ? (
        <div>No tours available</div>
      ) : (
        filteredTours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={onRemove} />
        ))
      )}
    </div>
  );
};

export default Gallery;