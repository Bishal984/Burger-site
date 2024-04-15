import React from 'react';
import { Link } from 'react-router-dom';
import { CiDark } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { CiMenuFries } from 'react-icons/ci';
import { useState, useContext } from 'react';
import { CiLight } from 'react-icons/ci';
import { LightDark } from '../../context/LightDark.js';
const Navbar = () => {
	const [isMenuToggle, setIsMenuToggle] = useState(false);
	const [isLight, setIsLight] = useContext(LightDark);
	return (
		<nav className="w-full md:h-[5vh] flex md:flex-row justify-between items-center md:py-4 relative py-8 px-2">
			<div>
				<Link href="#">
					<span className="text-whiteColor uppercase tracking-wide text-2xl font-[500]">Bur</span>
					<span className="text-secondaryColor font-[500] tracking-wide text-2xl uppercase">Ger</span>
				</Link>
			</div>
			<div className="flex  gap-x-6 text-whiteColor">
				<ul className="hidden md:flex flex-col md:flex-row gap-x-6 ">
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Home
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							About Us
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Menu
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Review
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Contact
						</Link>
					</li>
				</ul>
				<div className="flex justify-center gap-x-6">
					{isLight ? (
						<CiDark
							fontSize={'20px'}
							className="cursor-pointer hover:text-secondaryColor"
							onClick={() => setIsLight(!isLight)}
						/>
					) : (
						<CiLight
							fontSize={'20px'}
							className="cursor-pointer hover:text-secondaryColor"
							onClick={() => setIsLight(!isLight)}
						/>
					)}

					<CiMenuFries onClick={() => setIsMenuToggle(!isMenuToggle)} className="text-xl md:hidden" />
				</div>
			</div>
			<div
				className={[
					`w-full flex  gap-x-2 text-whiteColor z-20 absolute justify-center py-8 border-b-2 border-secondaryColor ease-in transition-all duration-300 bg-primaryColorLight`,
					isMenuToggle ? 'top-[0px]' : 'top-[-240px]',
				].join(' ')}
			>
				<ul className="flex flex-col gap-y-4">
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Home
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							About Us
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Menu
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Review
						</Link>
					</li>
					<li>
						<Link href="#" className="hover:text-secondaryColor ease-in transition-all duration-300">
							Contact
						</Link>
					</li>
				</ul>
				<div>
					<RxCross2
						className="absolute top-4 right-4 text-xl cursor-pointer"
						onClick={() => setIsMenuToggle(!isMenuToggle)}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
