import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import styles from './Button.module.scss';

const Button = ({ type, label, role, to, target, onClick, customClass }) => {
	return role === 'button' ? (
		<motion.button
			whileTap={{ scale: 0.95 }}
			type={type}
			onClick={onClick}
			className={cn(styles.container, customClass)}
		>
			{label}
		</motion.button>
	) : (
		<motion.a
			whileTap={{ scale: 0.95 }}
			href={to}
			target={target}
			onClick={onClick}
			className={cn(styles.container, customClass)}
		>
			{label}
		</motion.a>
	);
};

Button.defaultProps = {
	type: 'button',
	role: 'button',
	target: '_blank',
	onClick: () => null,
	customClass: '',
	to: '/',
};

Button.propTypes = {
	type: PropTypes.oneOf(['button', 'submit']),
	role: PropTypes.oneOf(['button', 'link']),
	label: PropTypes.string.isRequired,
	target: PropTypes.string,
	onClick: PropTypes.func,
	customClass: PropTypes.string,
	to: PropTypes.string,
};

export default Button;
