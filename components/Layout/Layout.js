import React from 'react';
import PropTypes from 'prop-types';

import { LanguageProvider } from '../../lib/contexts/LanguageProvider';

import Navbar from '../NavBar';
import WhatsButton from '../WhatsButton';
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer';

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<LanguageProvider>
			<Navbar />

			<main className={styles.container}>{children}</main>

			<WhatsButton />
			<ScrollToTop />

			<Footer />
		</LanguageProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
