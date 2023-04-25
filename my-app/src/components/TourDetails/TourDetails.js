
import "./TourDetails.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
const tour = require("../../data/db.json");

function TourDetails(props) {
  const { id } = useParams();
  const [showMore, showLess] = useState(false);

  const city = tour.filter((element) => element.id === id)[0];

  return (
    <>
    <h1>Details About City:</h1>
      <h3>Name--{city.name}</h3>
      <p>City id--{city.id}</p>
      <p>Info about City--{city.info.slice(0, 180)}</p>
      <button className="b1" onClick={() => showLess(true)}>see more</button>
      <button className="b2" onClick={() => showLess(false)}>see less</button>
      {showMore && (
        <>
          {" "}
          <p>{city.info.slice(180, 1000)}</p>{" "}
          <p>City Image link--</p> <a href={city.image}>Click Here to show image</a>
          <p>Price--{city.price}</p>
        </>
      )}
    </>
  );
}

export default TourDetails;
