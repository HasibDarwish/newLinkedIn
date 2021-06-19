import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar";
import ProfileBody from "./components/ProfilePage/ProfileBody.jsx";
import HomeBody from "./components/HomePage/HomeBody.jsx"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<>

			<Router>
				<Navbar />

				<Route
					component={ProfileBody}
					path="/profile"
					exact
				/>
				<Route
					component={HomeBody}
					path="/feed"
					exact />
				<Footer />
			</Router>

		</>
	);
}

export default App;
