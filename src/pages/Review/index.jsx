import React from 'react';
import Carousel from '../../components/Carousel';

const Review = () => {
	const reviewCustomers = [
		{
			id: 23,
			fullName: 'sujan gaihre',
			occupation: 'designer',
			img: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit.',
		},
		{
			id: 24,
			fullName: 'bisu gaihre',
			occupation: 'developer',
			img: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit.',
		},
		{
			id: 25,
			fullName: 'bibek gaihre',
			occupation: 'CA',
			img: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',

			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit.',
		},
		{
			id: 26,
			fullName: 'kedar gaihre',
			occupation: 'mentor',
			img: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit.',
		},
		{
			id: 27,
			fullName: 'jhon doe',
			occupation: 'desgination',
			img: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit.',
		},
	];
	return (
		<div className="py-16 flex flex-col items-center space-y-4">
			<h1 className="text-3xl text-whiteColor uppercase font-bold">Customer Review</h1>
			<div className="w-40 h-2 bg-secondaryColor"></div>
			<p className="text-paragraphColor">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore suscipit non neque quam ut quisquam.
			</p>
			<Carousel carouselList={reviewCustomers} />
		</div>
	);
};

export default Review;
