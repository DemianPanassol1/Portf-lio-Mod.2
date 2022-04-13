import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import styles from './NavMobile.module.scss';

const NavMobile = () => {
	const [toggleNav, setToggleNav] = useState(false);

	return (
		<Fragment>
			<div
				className={styles.container}
				onClick={() => setToggleNav(!toggleNav)}
				onKeyDown={() => null}
				role={'button'}
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
				variants={variants}
				transition={{
					duration: 0.4,
				}}
				className={styles.containerNav}
			>
				{/* Decidir o que fazer */}
			</motion.div>
		</Fragment>
	);
};

const variants = {
	open: { y: 0 },
	closed: { y: '-100%' },
};

export default NavMobile;
