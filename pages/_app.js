import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import Layout from '../components/Layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<Layout>
			<AnimatePresence initial={false} exitBeforeEnter={true}>
				<motion.div
					key={router.route}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={transition}
					variants={variants}
				>
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};

const transition = {
	duration: 0.5,
};

MyApp.propTypes = {
	Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
		.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
	router: PropTypes.shape({
		route: PropTypes.string.isRequired,
	}).isRequired,
};

export default MyApp;
