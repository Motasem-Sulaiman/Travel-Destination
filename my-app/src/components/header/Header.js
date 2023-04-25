import {Link} from "react-router-dom"
import './Header.css'

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
//   color: '#9BA4B5',
 

// };

function Headerr() {
 
    return (
      <nav>
    <Link to="/" className="Lin"><h3 className="Head">Home</h3></Link>
 
    
    </nav>
    );
  }
  
  export default Headerr;
  