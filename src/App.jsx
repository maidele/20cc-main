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

  return (  
    <main>
      <h1> Welcome, Our Tours!</h1>  
      <Gallery tours={tours} setTours={setTours} onRemove={removesTours} />
    </main>
  );
}

export default App;
