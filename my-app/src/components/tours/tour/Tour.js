import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
                width: "80%",
                color: "#394867",
                padding: "60px",
                marginLeft: "110px",
                marginTop: "25px",
                backgroundColor:"#9BA4B5"
              }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default Tour;
