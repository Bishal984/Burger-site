import React, { useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Card from './Card';
import { useState } from 'react';
const Carousel = ({ carouselList }) => {
	useEffect(() => {
		const carousel = document.querySelector('.carousel');
		const carouselInner = carousel.querySelector('.carouselInner');
		const carouselItems = carousel.querySelectorAll('.carouselItem');
		const numItems = carouselItems.length;
		carouselInner.innerHTML += carouselInner.innerHTML; // Duplicate items for infinite scrolling
		let currentIndex = 0;
		function nextSlide() {
			currentIndex = (currentIndex + 1) % numItems;
			carouselInner.style.transform = `translateX(-${currentIndex * 420}px)`;
		}
		setInterval(nextSlide, 3000); // Auto slide every 3 seconds
	});

	const [items, setItems] = useState(carouselList);
	return (
		<div className="w-full carousel max-w-screen-xl overflow-hidden">
			<div className="grid grid-flow-col gap-x-16 carouselInner">
				{items?.map((item) => (
					<Card key={item?.id} className="w-96 bg-darkColorLight p-4 rounded-xl carouselItem">
						<Card.Body>
							<Card.Description className="space-y-4">
								<p className="text-paragraphColor text-lg">{item?.description}</p>
								<div className="flex justify-between">
									<div className="flex gap-x-1 items-center">
										<img src={item?.img} alt="image" className="h-12 w-12 object-cover rounded-full" />
										<div className="flex flex-col">
											<span className="text-lg font-semibold uppercase text-whiteColor">{item?.fullName}</span>
											<span className="text-lg capitalize text-paragraphColor">{item?.occupation}</span>
										</div>
									</div>
									<FaQuoteRight className="text-2xl text-secondaryColor" />
								</div>
							</Card.Description>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Carousel;
