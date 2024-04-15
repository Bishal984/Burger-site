import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
	return (
		<div className="w-[80vw] mx-auto py-12 flex justify-between items-center">
			<div className="flex-1">
				<h1 className="text-4xl font-bold text-whiteColor">BURGER</h1>
				<p className="text-paragraphColor">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. At est possimus molestias odit ad totam sint quis
					ratione nisi error?
				</p>
			</div>
			<div className="flex-1">
				<h2 className="text-xl uppercase font-bold text-whiteColor">Support</h2>
				<ul className="text-paragraphColor">
					<li>FAQ</li>
					<li>Privacy Policy</li>
					<li>Terms and Condition</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="flex-1 space-y-4">
				<div>
					<h2 className="text-xl uppercase font-bold text-whiteColor">Phone</h2>
					<span className="flex gap-x-2 text-paragraphColor">
						<FaPhone className="text-secondaryColor" />
						+100000000000
					</span>
				</div>
				<div>
					<h2 className="text-xl uppercase font-bold text-whiteColor">Email</h2>
					<span className="flex gap-x-2 text-paragraphColor">
						<MdEmail className="text-secondaryColor" />
						jhondoe12@gmail.com
					</span>
				</div>
			</div>
			<div className="flex-1 space-y-4">
				<div>
					<h2 className="text-xl uppercase font-bold text-whiteColor">Address</h2>
					<span className="flex gap-x-2 text-paragraphColor">
						<FaLocationDot className="text-secondaryColor" />
						Kathmandu
					</span>
				</div>
				<div>
					<h2 className="text-xl uppercase font-bold text-whiteColor">Follow Us</h2>
					<ul className="flex gap-x-1">
						<li>
							<FaFacebookF className="text-secondaryColor" />
						</li>
						<li>
							<FaTwitter className="text-secondaryColor" />
						</li>
						<li>
							<RiInstagramFill className="text-secondaryColor" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
