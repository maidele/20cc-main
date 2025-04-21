import React from "react";  


const DestinationSelector = ({ destinations, onDestinationChange }) => {
 return (
   <div className="destination-selector">
     <label htmlFor="destination">Select Destination:</label>
     <select
       id="destination"
       onChange={(e) => onDestinationChange(e.target.value)}
     >
       <option value="All">All</option>
       {destinations.map((destination) => (
         <option key={destination} value={destination}>
           {destination}
         </option>
       ))}
     </select>
   </div>
 );
}
export default DestinationSelector;
//     return <div>No tours left. Refresh to reload.</div>;
