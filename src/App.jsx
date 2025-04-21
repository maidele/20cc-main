import React, { useState,useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";


//App's root component
function App() {
  const [tours, setTours] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  // This removes the tour from the list
  const removesTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const filterTours = (destination) => {
    if (destination === "All") {
      return tours;
    }
    return tours.filter((tour) => tour.destination === destination);
  }
  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination);
  };
  const filteredTours = filterTours(selectedDestination);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch("./components/DestinationSelector");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTours(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchDestinations = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/destinations");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchTours();
    fetchDestinations();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!tours.length) {
    return <div>No tours available</div>;
  }
  if (!destinations.length) {
    return <div>No destinations available</div>;
  }
  if (!selectedDestination) {
    return <div>Please select a destination</div>;
  }
  if (filteredTours.length === 0) {
    return <div>No tours available for this destination</div>;
  }
  

  return (  
    <main>
      <h1> Welcome, Our Tours!</h1>  
      <Gallery tours={tours} setTours={setTours} onRemove={removesTours} />
    </main>
  );
}

export default App;
