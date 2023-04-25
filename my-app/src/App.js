import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Tours from "./components/tours/Tours";
import Home from "./components/home/Home"
import TourDetails from "./components/TourDetails/TourDetails"
import {Routes,Route} from 'react-router-dom';





function App() {
  return (
    <>
      <Header />

      <Routes>


<Route path="/" element={<Home/>}/>
<Route path="/city/:id" element={<TourDetails/>}/>





      </Routes> 
    
      <Tours/>
      <Footer />
    </>
  );
}

export default App;
