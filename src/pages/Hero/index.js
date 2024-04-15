import React from 'react';
import img from '../../../src/img/home-image.png';
import img2 from '../../../src/img/burger-1.png';
import img3 from '../../../src/img/snack-1.png';
import img4 from '../../../src/img/snack-2.png';
import img5 from '../../../src/img/promo-1.png';
import img6 from '../../../src/img/promo-2.png';

import RestaurantFillIcon from 'remixicon-react/RestaurantFillIcon';
import DropFillIcon from 'remixicon-react/DropFillIcon';
import LeafFillIcon from 'remixicon-react/LeafFillIcon';

const Hero = () => {
	return (
		<section className="w-full h-full flex flex-col" id="hero">
			<div className={'w-full h-screen flex justify-between items-center gap-x-4'}>
				<div className="w-[80%] h-[80%]">
					<img src={img} alt="burger_image" className="w-full h-full object-cover" />
				</div>
				<div className="flex flex-col gap-y-4">
					<h1 className="text-whiteColor text-7xl flex flex-col uppercase font-extrabold tracking-wide">
						<span>Happy Tummy With</span>
						<span>tasty burgers.</span>
					</h1>
					<div className="w-44 border-b-2 text-secondaryColor"></div>
					<p className="text-paragraphColor tracking-wide">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam sit quos voluptas porro fugiat eius,
						laboriosam doloremque quibusdam mollitia asperiores officia dolorum repudiandae omnis quod ut voluptatibus
						illum molestias non.
					</p>
					<ul className="flex gap-x-16 py-4">
						<li className="flex flex-col items-center">
							<RestaurantFillIcon className="text-secondaryColor" size={'40px'} />
							<span className="text-base capitalize font-semibold text-whiteColor">delicious</span>
						</li>
						<li className="flex flex-col items-center">
							<DropFillIcon className="text-secondaryColor" size={'40px'} />
							<span className="text-base capitalize font-semibold text-whiteColor">fresh</span>
						</li>
						<li className="flex flex-col items-center">
							<LeafFillIcon className="text-secondaryColor" size={'40px'} />
							<span className="text-base capitalize font-semibold text-whiteColor">organic</span>
						</li>
					</ul>
					<button
						type="button"
						className="w-32 bg-secondaryColor rounded-lg p-2 shadow hover:bg-secondaryColor/95 transition-all ease-in duration-300 hover:text-whiteColor"
					>
						Learn More
					</button>
				</div>
			</div>
			<div className="flex gap-x-6 mb-24">
				<div className="w-1/3 flex bg-secondaryColor px-4 py-2 rounded-lg overflow-hidden">
					<img src={img2} alt="" className="w-20 object-contain relative left-[-25px] top-[15px]" />
					<div className="flex flex-col">
						<h2 className="text-xl font-extrabold text-whiteColor">Food</h2>
						<span className="text-whiteColor">Lorem, ipsum dolor sit.</span>
						<span>Buy online</span>
					</div>
				</div>
				<div className="w-1/3 flex bg-redColor px-4 py-2 rounded-lg overflow-hidden">
					<img src={img3} alt="" className="w-20 object-contain relative left-[-25px] top-[15px]" />
					<div className="flex flex-col">
						<h2 className="text-xl font-extrabold text-whiteColor">Food</h2>
						<span className="text-whiteColor">Lorem, ipsum dolor sit.</span>
						<span className="text-secondaryColor">Buy online</span>
					</div>
				</div>
				<div className="w-1/3 flex px-4 py-2 rounded-lg overflow-hidden bg-greenColor">
					<img src={img4} alt="" className="w-20 object-contain relative left-[-25px] top-[15px]" />
					<div className=" flex flex-col">
						<h2 className="text-xl font-extrabold text-whiteColor">Food</h2>
						<span className="text-whiteColor">Lorem, ipsum dolor sit.</span>
						<span className="text-secondaryColor">Buy online</span>
					</div>
				</div>
			</div>
			<div className="flex gap-x-24 mb-24">
				<div className="w-1/2 h-1/3 flex items-center py-6 justify-around rounded-lg bg-darkColorLight shadow-xl">
					<div className="flex flex-col gap-y-2">
						<span className="text-secondaryColor">Payday promo</span>
						<h2 className="flex flex-col font-bold text-xl text-whiteColor uppercase">
							<span>Get a 10% discount on </span>
							<span>payday week</span>
						</h2>
						<p className="flex flex-col text-paragraphColor">
							<span>Lorem ipsum dolor sit amet,</span>
							<span>consectetur adipisicing elit.</span>{' '}
						</p>
						<span className="text-secondaryColor">Buy online</span>
					</div>
					<div>
						<img src={img5} alt="" className="w-40 h-40 object-contain" />
					</div>
				</div>
				<div className="w-1/2 h-1/3 flex justify-around items-center shadow-xl py-6 rounded-lg bg-darkColorLight">
					<div className="flex flex-col gap-y-2">
						<span className="text-secondaryColor">Payday promo</span>
						<h2 className="flex flex-col font-bold text-xl text-whiteColor uppercase">
							<span>Get a 10% discount on </span>
							<span>payday week</span>
						</h2>
						<p className="flex flex-col text-paragraphColor">
							<span>Lorem ipsum dolor sit amet,</span>
							<span>consectetur adipisicing elit.</span>{' '}
						</p>
						<span className="text-secondaryColor">Buy online</span>
					</div>
					<div>
						<img src={img6} alt="" className="w-40 h-40 object-contain" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
