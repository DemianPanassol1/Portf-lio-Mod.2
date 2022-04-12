import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const initialValue = {
	eua: false,
};

const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState(initialValue);

	const changeLanguage = () => {
		setLang({ eua: !lang.eua });
	};

	const dispatch = {
		lang: lang.eua,
		changeLanguage,
	};

	return (
		<LanguageContext.Provider value={dispatch}>
			{children}
		</LanguageContext.Provider>
	);
};

const useLanguageContext = () => {
	return useContext(LanguageContext);
};

LanguageProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { LanguageProvider, useLanguageContext };
