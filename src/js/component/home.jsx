import React from "react";


import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";
import { Cards } from "./cards";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			
			<div className="container">
			<Jumbotron />
			
			<Cards />

			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
