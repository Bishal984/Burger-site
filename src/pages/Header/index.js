import React from 'react';
import Navbar from '../Navbar';
const Header = () => {
	window.onscroll = function () {
		myFunction();
	};

	function myFunction() {
		const header = document.getElementsByTagName('header');

		if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
			header[0].classList.add('border-b-2');
		} else {
			header[0].classList.remove('border-b-2');
		}
	}

	return (
		<header className="w-[80vw] h-[5vh] bg-darkColorLight z-20 fixed top-0 border-secondaryColor">
			{' '}
			<Navbar />
		</header>
	);
};

export default Header;
