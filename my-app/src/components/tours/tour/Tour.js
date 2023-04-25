import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Tour.css'

function Tour(props) {
  return (
    <>
      {props.tour.map((item, i) => {
        return (
      
          <Link
            to={`/city/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none" }}
         
          >
            {" "}
        <Card 
             style={{
               width: "60%",
               color: "#394867",
               padding: "60px",
               marginLeft: "18%",
               marginTop: "25px",
               backgroundColor:"#9BA4B5",
              }}
            >
               <Card.Title style={{textAlign:"center"}}>{item.name}</Card.Title>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
               
              </Card.Body>
            </Card>
          </Link>
   
        ); 
        
      })}
      
    </>
  );
}

export default Tour;
