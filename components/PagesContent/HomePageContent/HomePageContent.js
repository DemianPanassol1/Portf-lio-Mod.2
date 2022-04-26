import React from 'react';

import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';

import SectionTitle from '../../SectionTitle';

import styles from './HomePageContent.module.scss';

const HomePageContent = () => {
	const { lang } = useLanguageContext();

	return (
		<section className={styles.container}>
			<SectionTitle
				title={lang ? 'Home Page' : 'Página Principal'}
				subtitle={
					lang ? 'This is the HomePage' : 'Essa é a página principal'
				}
				lang={lang}
			/>
		</section>
	);
};

export default HomePageContent;
