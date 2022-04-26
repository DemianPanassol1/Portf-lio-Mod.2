import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { useLanguageContext } from '../../../lib/contexts/LanguageProvider';
import {
	transitionContent,
	variantsContent,
	variantsMenu,
} from '../../../lib/helpers';

import styles from './NavMobile.module.scss';

const NavMobile = () => {
	const [toggleNav, setToggleNav] = useState(false);

	const { asPath } = useRouter();

	const { lang } = useLanguageContext();

	useEffect(() => {
		toggleNav && setTimeout(() => setToggleNav(!toggleNav), 500);
		//eslint-disable-next-line
	}, [asPath]);

	return (
		<Fragment>
			<div
				className={styles.container}
				onClick={() => setToggleNav(!toggleNav)}
				onKeyDown={() => null}
				role="button"
				tabIndex={0}
			>
				<div className={styles.containerBox}>
					<div
						className={cn(styles.containerBoxBody, {
							[styles.containerBoxBodyActive]: toggleNav,
							[styles.containerBoxBodyDeactive]: !toggleNav,
						})}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>

			<motion.div
				animate={toggleNav ? 'open' : 'closed'}
				variants={variantsMenu}
				transition={{
					duration: 0.4,
				}}
				className={styles.containerNav}
			>
				<AnimatePresence>
					<ul className={styles.containerNavBody}>
						<li className={styles.containerNavBodyLink}>
							<Link href="/" passHref>
								<motion.a
									key={lang}
									initial="initial"
									animate="animate"
									transition={transitionContent}
									variants={variantsContent}
									data-current={asPath === '/'}
									className={styles.containerNavBodyLinkItem}
								>
									{lang ? 'Home' : 'Início'}
								</motion.a>
							</Link>
						</li>
						<li className={styles.containerNavBodyLink}>
							<Link href="/about" passHref>
								<motion.a
									key={lang}
									initial="initial"
									animate="animate"
									transition={transitionContent}
									variants={variantsContent}
									data-current={asPath === '/about'}
									className={styles.containerNavBodyLinkItem}
								>
									{lang ? 'About' : 'Sobre'}
								</motion.a>
							</Link>
						</li>
						<li className={styles.containerNavBodyLink}>
							<Link href="/contact" passHref>
								<motion.a
									key={lang}
									initial="initial"
									animate="animate"
									transition={transitionContent}
									variants={variantsContent}
									data-current={asPath === '/contact'}
									className={styles.containerNavBodyLinkItem}
								>
									{lang ? 'Contact' : 'Contato'}
								</motion.a>
							</Link>
						</li>
					</ul>
				</AnimatePresence>
			</motion.div>
		</Fragment>
	);
};

export default NavMobile;
