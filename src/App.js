import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Router>
        <Navbar />


        <Footer />
      </Router>
    </div>
  );
}

export default App;
