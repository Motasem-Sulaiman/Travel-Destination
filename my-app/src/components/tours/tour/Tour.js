

import TourDetails from '../../TourDetails/TourDetails';

import Card from 'react-bootstrap/Card';
import { useParams,Link } from 'react-router-dom';

   
   function Tour(props) {
 
        return (
            <>
        
            {props.tour.map((item, i) => {
              return <Link to="/city/:id"  key={item.id} > <Card style={{ width: '80%' ,color:'red' , padding:'60px',marginLeft:"110px"}} >
              <Card.Img variant="top" src={item.image}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>

                
          
              </Card.Body>

             
            </Card>
            </Link>


            })}
            </>
        );
      }
      



export default Tour;