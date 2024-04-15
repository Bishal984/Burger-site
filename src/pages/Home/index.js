import React from 'react';
import Header from '../Header';
import Hero from '../Hero/index.js';
import About from '../About/index.js';
import Menu from '../Menu/index.jsx';
import Review from '../Review/index.jsx';
import Contact from '../Contact/index.jsx';
import Footer from '../Footer/index.jsx';
const Home = () => {
	return (
		<div className="w-screen h-min-screen bg-darkColor">
			<div className="w-full">
				<div className="w-[80vw] mx-auto">
					<Header />
				</div>
				<main className="w-[80vw] mx-auto">
					<Hero />
					<About />
					<Menu />
					<Review />
				</main>
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
