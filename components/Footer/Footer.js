import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import { transitionContent, variantsContent } from '../../lib/helpers';
import { useLanguageContext } from '../../lib/contexts/LanguageProvider';

import styles from './Footer.module.scss';

const Footer = () => {
	const { lang } = useLanguageContext();

	return (
		<footer className={styles.container}>
			<section className={styles.containerBody}>
				<div className={styles.containerBodyButtons}>
					<a
						href="https://bit.ly/3tIgCRZ"
						target="_blank"
						referrerPolicy="no-referrer" rel="noreferrer"
					>
						<FaLinkedin
							title={`${
								lang
									? 'My Linkedin profile'
									: 'Meu perfil no Linkedin'
							}`}
						/>
					</a>

					<a
						href="https://bit.ly/36vn3yU"
						target="_blank"
						referrerPolicy="no-referrer" rel="noreferrer"
					>
						<FaInstagram
							title={`${
								lang
									? 'My Instagram profile'
									: 'Meu perfil no Instagram'
							}`}
						/>
					</a>

					<a
						href="https://bit.ly/3LnVvKR"
						target="_blank"
						referrerPolicy="no-referrer" rel="noreferrer"
					>
						<FaGithub
							title={`${
								lang
									? 'My Github repository'
									: 'Meu repositório no Github'
							}`}
						/>
					</a>
				</div>
				<motion.p
					key={lang}
					initial="initial"
					animate="animate"
					transition={transitionContent}
					variants={variantsContent}
					className={styles.containerBodyText}
				>
					{lang ? (
						<>CopyRight &copy; 2022. All Rights Reserved</>
					) : (
						<>CopyRight &copy; 2022. Todos os Direitos Reservados</>
					)}
				</motion.p>
			</section>
		</footer>
	);
};

export default Footer;
