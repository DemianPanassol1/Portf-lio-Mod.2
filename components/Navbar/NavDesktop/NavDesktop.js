import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { transitionContent, variantsContent } from '../../../lib/helpers';
import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';

import styles from './NavDesktop.module.scss';

const NavDesktop = () => {
	const { asPath } = useRouter();
	const { lang } = useLanguageContext();

	return (
		<ul className={styles.container}>
			<li className={styles.containerLink}>
				<Link href="/" passHref>
					<motion.a
						key={lang}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
						data-current={asPath === '/'}
						className={styles.containerLinkItem}
					>
						{lang ? 'Home' : 'Início'}
					</motion.a>
				</Link>
			</li>
			<li className={styles.containerLink}>
				<Link href="/about" passHref>
					<motion.a
						key={lang}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
						data-current={asPath === '/about'}
						className={styles.containerLinkItem}
					>
						{lang ? 'About' : 'Sobre'}
					</motion.a>
				</Link>
			</li>
			<li className={styles.containerLink}>
				<Link href="/contact" passHref>
					<motion.a
						key={lang}
						initial="initial"
						animate="animate"
						transition={transitionContent}
						variants={variantsContent}
						data-current={asPath === '/contact'}
						className={styles.containerLinkItem}
					>
						{lang ? 'Contact' : 'Contato'}
					</motion.a>
				</Link>
			</li>
		</ul>
	);
};

export default NavDesktop;
