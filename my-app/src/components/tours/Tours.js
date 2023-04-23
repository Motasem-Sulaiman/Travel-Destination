import Tour from "../tours/tour/Tour";
const tour = require("../../data/db.json");





function Tours(props) {
  return (
    <>
    <Tour tour={tour} />
   
    </>
  );
}

export default Tours;
