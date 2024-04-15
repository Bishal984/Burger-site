import React from 'react';

const Contact = () => {
	return (
		<div className="bg-secondaryColor py-8">
			<div className="w-[80vw] flex justify-between mx-auto items-center">
				<div className="flex-1">
					<h2 className="text-3xl uppercase tracking-normal font-bold">Get Exclusive Update</h2>
					<p className="text-whiteColor">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt totam sequi facere consectetur iure
						aspernatur voluptates, corporis molestiae adipisci?
					</p>
				</div>
				<div className="flex-1">
					<form className="flex gap-x-2">
						<input type="text" placeholder="email" className="w-80 rounded-xl bg-whiteColor text-darkColor p-3" />
						<button className="px-5 py-1 bg-darkColor text-whiteColor hover:bg-darkColorLight transition-all duration-150 ease-in-out rounded-xl">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
