import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProfileGrid from "./components/Profile/ProfileGrid.jsx";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<ProfileGrid />
				<Footer />
			</Router>
		</>
	);
}

export default App;
