import React, { useState } from 'react';
import { menuItem } from '../../Data/data';
const Menu = () => {
	console.log(menuItem);
	const [selectMenuItem, setSelectMenuItem] = useState(menuItem);
	const [active, setActive] = useState('all');
	return (
		<section className="w-full h-min-screen">
			<div className="flex flex-col items-center space-y-4">
				<h1 className="text-3xl text-secondaryColor font-bold uppercase tracking-wide">Our best menu</h1>
				<div className="w-40 h-2 bg-secondaryColor flex justify-center"></div>
				<p className="text-paragraphColor tracking-wide leading-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, recusandae ullam fuga eius rerum ratione.
				</p>

				<ul className="flex gap-x-2">
					<li>
						<button
							type="button"
							className={`px-4 py-2 shadow-lg rounded-lg buttonMenu ${
								active === 'all' ? 'bg-greenColor' : 'bg-secondaryColor'
							}`}
							onClick={() => {
								setSelectMenuItem(menuItem);
								setActive('all');
							}}
						>
							All
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 shadow-lg rounded-lg text-whiteColor ${
								active === 'food' ? 'bg-greenColor' : 'bg-secondaryColor'
							}`}
							onClick={() => {
								setSelectMenuItem(menuItem.filter((item) => item?.type === 'food'));
								setActive('food');
							}}
						>
							Food
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 shadow-lg rounded-lg text-whiteColor ${
								active === 'snack' ? 'bg-greenColor' : 'bg-secondaryColor'
							}`}
							onClick={() => {
								setSelectMenuItem(menuItem.filter((item) => item?.type === 'snack'));
								setActive('snack');
							}}
						>
							Snack
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 shadow-lg rounded-lg text-whiteColor ${
								active === 'beverage' ? 'bg-greenColor' : 'bg-secondaryColor'
							}`}
							onClick={() => {
								setSelectMenuItem(menuItem.filter((item) => item?.type === 'beverage'));
								setActive('beverage');
							}}
						>
							Beverage
						</button>
					</li>
				</ul>
				<ul className="grid grid-cols-3 gap-8 showMenuItem">
					{selectMenuItem?.map((item, i) => (
						<>
							<li
								key={item?.id}
								className="bg-darkColorLight space-y-4 px-2 py-4 shadow-sm rounded-xl flex flex-col items-center hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out
							"
							>
								<div className="">
									<img src={item?.img} alt="img" className="w-20 h-20 object-cover" />
								</div>
								<div className="flex flex-col gap-y-2 px-4">
									<h2 className="text-2xl font-bold text-whiteColor uppercase">Regular beef burger</h2>
									<p className="text-paragraphColor text-sm">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									</p>
									<span className="text-secondaryColor font-semibold">$42.00</span>
								</div>
							</li>
						</>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Menu;
