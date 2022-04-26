import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { useLanguageContext } from '../../lib/contexts/LanguageProvider';

import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

import styles from './Navbar.module.scss';

const Navbar = () => {
	const { lang, changeLanguage } = useLanguageContext();
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<header className={styles.container}>
			<section className={styles.containerBody}>
				<div className={styles.containerBodyLang}>
					<div className={styles.containerBodyLangContainer}>
						<Image
							src={'/img/svg/brazil.svg'}
							width={24}
							height={24}
							alt={lang ? "Brazil's Flag" : 'Bandeira do Brasil'}
							title={
								lang ? "Brazil's Flag" : 'Bandeira do Brasil'
							}
						/>
						<small
							className={cn(
								styles.containerBodyLangContainerSmall,
								{
									[styles.containerBodyLangContainerSmallActive]:
										!lang,
									[styles.containerBodyLangContainerSmallDeactive]:
										lang,
								},
							)}
						>
							BRA
						</small>
					</div>

					<div
						className={styles.containerBodyLangSwitch}
						data-enabled={lang}
						onClick={changeLanguage}
						onKeyDown={() => null}
						role={'button'}
						tabIndex={0}
					>
						<motion.div
							className={styles.containerBodyLangSwitchHandle}
							layout
							transition={{
								type: 'spring',
								stiffness: 700,
								damping: 30,
							}}
						/>
					</div>

					<div className={styles.containerBodyLangContainer}>
						<Image
							src={'/img/svg/united_states.svg'}
							width={24}
							height={24}
							alt={lang ? "America's Flag" : 'Bandeira dos EUA'}
							title={lang ? "America's Flag" : 'Bandeira dos EUA'}
						/>
						<small
							className={cn(
								styles.containerBodyLangContainerSmall,
								{
									[styles.containerBodyLangContainerSmallActive]:
										lang,
									[styles.containerBodyLangContainerSmallDeactive]:
										!lang,
								},
							)}
						>
							ENG
						</small>
					</div>
				</div>

				{isMobile ? <NavMobile /> : <NavDesktop />}
			</section>
		</header>
	);
};

export default Navbar;
