import React from 'react';
import CheckFillIcon from 'remixicon-react/CheckFillIcon';
import aboutImg from '../../img/about.jpg';
import { motion } from 'framer-motion';
const About = () => {
	return (
		<section className="w-full grid grid-cols-2 gap-x-8 mb-20">
			<motion.div
				className="h-[280px] "
				initial={{ transform: 'translateX(-150px)', duration: '0' }}
				whileInView={{
					transform: 'translateX(0px)',
					duration: '0.8s',
					transitionTimingFunction: 'ease-in',
				}}
				// style={{ duration: '0.8' }}
			>
				<img src={aboutImg} alt="aboutImg" className="w-full h-full rounded-lg object-cover" />
			</motion.div>
			<motion.div
				className="flex flex-col gap-y-4"
				initial={{ transform: 'translateX(150px)' }}
				whileInView={{ transform: 'translateX(0px)', duration: '0.8s', transitionTimingFunction: 'ease-in' }}
			>
				<h2 className="flex flex-col text-3xl uppercase tracking-wide font-bold text-whiteColor">
					<span>Find food and drinks, all-in-</span>
					<span>one place for your best taste.</span>
				</h2>
				<div className="w-40 border-b-2 border-secondaryColor"></div>
				<p className="text-paragraphColor tracking-wide leading-5">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam a excepturi quia dolorem voluptate ratione
					qui, tempore debitis ducimus blanditiis. dolorem voluptate qui,debitis ducimus blanditiis.
				</p>
				<ul className="grid grid-cols-2 gap-x-20">
					<li className="flex gap-x-1 text-whiteColor">
						<CheckFillIcon className="text-secondaryColor" size={'1.5rem'} />
						Best Price
					</li>
					<li className="flex gap-x-1 text-whiteColor">
						{' '}
						<CheckFillIcon className="text-secondaryColor" size={'1.5rem'} />
						Best Service
					</li>
					<li className="flex gap-x-1 text-whiteColor">
						{' '}
						<CheckFillIcon className="text-secondaryColor" size={'1.5rem'} />
						Fresh Ingredient
					</li>
					<li className="flex gap-x-1 text-whiteColor">
						{' '}
						<CheckFillIcon className="text-secondaryColor" size={'1.5rem'} />
						Health Protocol
					</li>
				</ul>
				<button
					type="button"
					className="w-40 bg-secondaryColor rounded-lg py-2 px-4 text-[#444] hover:text-whiteColor shadow hover:bg-secondaryColor/95 ease-in transition-all duration-300"
				>
					About Us
				</button>
			</motion.div>
		</section>
	);
};

export default About;
