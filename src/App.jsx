import React, { useState } from "react";
import Gallery from "./components/Gallery";
import "./styles/styles.css";

//App's root component
function App() {
  const [tours, setTours] = useState([]);

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
