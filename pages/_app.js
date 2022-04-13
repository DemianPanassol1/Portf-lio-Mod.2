import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import { transitionPage, variantsPage } from '../lib/helpers';

import Layout from '../components/Layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	const { asPath } = useRouter();

	return (
		<AnimatePresence initial={false} exitBeforeEnter={true}>
			<Layout>
				<motion.div
					key={asPath}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={transitionPage}
					variants={variantsPage}
				>
					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</AnimatePresence>
	);
}

MyApp.propTypes = {
	Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
		.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
