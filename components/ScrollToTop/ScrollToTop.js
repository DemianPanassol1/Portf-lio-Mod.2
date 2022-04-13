import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowUp } from 'react-icons/ai';

import { useLanguageContext } from '../../lib/contexts/LanguageProvider';

import { scrollToTop } from '../../lib/helpers';

import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
	const [show, setShow] = useState(false);

	const { lang } = useLanguageContext();

	const handleShowScrollToTop = () => {
		if (window.pageYOffset > 300) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleShowScrollToTop);

		return () => {
			window.removeEventListener('scroll', handleShowScrollToTop);
		};
	}, []);

	return (
		<AnimatePresence initial={false}>
			{show && (
				<motion.div
					key={12323}
					initial="initial"
					animate="animate"
					exit="exit"
					variants={variants}
					whileTap={{ scale: 0.9 }}
					className={styles.container}
					role={'button'}
					tabIndex={0}
					onClick={scrollToTop}
					onKeyDown={scrollToTop}
				>
					<AiOutlineArrowUp
						title={`${
							lang ? 'Back to the top' : 'De volta para cima'
						}`}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const variants = {
	initial: { x: '500%' },
	animate: { x: '0%' },
	exit: { x: '500%' },
};

export default ScrollToTop;
