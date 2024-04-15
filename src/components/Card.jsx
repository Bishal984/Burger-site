import React from 'react';

const Card = ({ className = '', children }) => {
	return <div className={['shadow-xl', className].join(' ')}>{children}</div>;
};
const CardImage = ({
	src = 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
	className = '',
	alt = 'image',
}) => (
	<figure>
		<img src={src} alt={alt} className={className} />
	</figure>
);
const CardBody = ({ className = '', children }) => <div className={className}>{children}</div>;
const CardTitle = ({ className = '', title }) => <h2 className={className}>{title}</h2>;
const CardDescription = ({ children, className = '' }) => <div className={className}>{children}</div>;
export default Object.assign(Card, {
	Image: CardImage,
	Body: CardBody,
	Title: CardTitle,
	Description: CardDescription,
});
