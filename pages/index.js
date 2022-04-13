import React, { Fragment } from 'react';
import Head from 'next/head';

import { useLanguageContext } from '../lib/contexts/LanguageProvider';

import HomePageContent from '../components/PagesContent/HomePageContent';

const HomePage = () => {
	const { lang } = useLanguageContext();

	return (
		<Fragment>
			<Head>
				<meta
					name="description"
					content={
						lang
							? "Portfolio about me, Demian Panassol, where I try to show a little of what I know and do. I'm always learning something new, so what I present here may not be in line with my current skills."
							: 'Portfólio sobre mim, Demian Panassol, onde busco mostrar um pouco do que eu sei e faço. Sempre estou aprendendo algo novo, então o que apresento aqui pode não estar de acordo com as minhas habilidades atuais.'
					}
				/>

				<title>
					{lang
						? 'Portfolio | Demian Panassol'
						: 'Portfólio | Demian Panassol'}
				</title>
			</Head>
			<HomePageContent />
		</Fragment>
	);
};

export default HomePage;
