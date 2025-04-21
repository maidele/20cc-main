import React, { useState } from "react";


//TourCard renders individual tour cards detail


const TourCard = ({ id, name, price, info, image, onRemove }) => { //destructuring props
 const [readMore, setReadMore] = useState(false); //state to toggle read more


 return (
   <article className="tour-card">
     <img src={image} alt={name} />
     <footer>
       <div className="tour-info">
         <h4>{name}</h4>
         <h4 className="tour-price">${price}</h4>
       </div>
       <p>
         {readMore ? info : `${info.substring(0, 200)}...`}
         <button onClick={() => setReadMore(!readMore)}>
           {readMore ? "Show Less" : "Read More"}
         </button>
       </p>
       <button className="delete-btn" onClick={() => onRemove(id)}>
         Not Interested
       </button>
     </footer>
   </article>
 );
}
export default TourCard;
