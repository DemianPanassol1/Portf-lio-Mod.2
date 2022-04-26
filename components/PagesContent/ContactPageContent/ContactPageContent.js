import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';
import { transitionContent, variantsContent } from '../../../lib/helpers';

import SectionTitle from '../../SectionTitle';
import ContactForm from './ContactForm';

import styles from './ContactPageContent.module.scss';

const ContactPageContent = () => {
	const { lang } = useLanguageContext();

	const key1 = lang ? 1 : 0;
	const key2 = lang ? 2 : 3;

	return (
		<section className={styles.container}>
			<SectionTitle
				title={lang ? 'Contact me' : 'Entre em contato'}
				subtitle={
					lang
						? 'Send a message to me through here'
						: 'Envie uma mensagem para mim por aqui'
				}
				lang={lang}
			/>

			<ContactForm />

			<div className={styles.containerCard}>
				<div className={styles.containerCardBody}>
					<a
						className={styles.containerCardBodyItem}
						href="tel:+5554991967411"
					>
						<FaPhoneAlt />
						<motion.h4
							key={key1}
							initial="initial"
							animate="animate"
							transition={transitionContent}
							variants={variantsContent}
						>
							{lang ? 'Phone' : 'Telefone'}
						</motion.h4>
						<h5>+55 (54) 99196-7411</h5>
					</a>

					<a
						className={styles.containerCardBodyItem}
						href="mailto:demianpanassol01@gmail.com"
					>
						<HiMail />
						<motion.h4
							key={key2}
							initial="initial"
							animate="animate"
							transition={transitionContent}
							variants={variantsContent}
						>
							{lang ? 'Email' : 'E-mail'}
						</motion.h4>
						<h5>demianpanassol01@gmail.com</h5>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactPageContent;
