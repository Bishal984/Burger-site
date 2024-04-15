import { createContext, useState } from 'react';
export const LightDark = createContext();

const LightDarkProvider = ({ children }) => {
	const [isLight, setIsLight] = useState(true);

	return <LightDark.Provider value={[isLight, setIsLight]}>{children}</LightDark.Provider>;
};

export default LightDarkProvider;
