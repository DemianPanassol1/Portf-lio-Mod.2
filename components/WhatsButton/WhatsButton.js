import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import { useLanguageContext } from '../../lib/contexts/LanguageProvider';

import styles from './WhatsButton.module.scss';

const WhatsButton = () => {
	const { lang } = useLanguageContext();

	return (
		<motion.div whileTap={{ scale: 0.9 }} className={styles.container}>
			<a
				target={'_blank'}
				referrerPolicy="no-referrer"
				href="https://bit.ly/3qHdq7f" rel="noreferrer"
			>
				<FaWhatsapp
					title={`${
						lang
							? 'Send me a message on WhatsApp'
							: 'Me mande uma mensagem no WhatsApp'
					}`}
				/>
			</a>
		</motion.div>
	);
};

export default WhatsButton;
