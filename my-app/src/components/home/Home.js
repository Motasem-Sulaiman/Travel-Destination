import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
const data = require("../../data/db.json");

function Home() {
  return (
    <>
      <Header />
      <Tours myArr={data} />
      <Footer />
    </>
  );
}

export default Home;
