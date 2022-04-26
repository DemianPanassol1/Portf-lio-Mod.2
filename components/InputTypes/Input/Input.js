import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({
	name,
	type,
	label,
	placeHolder,
	register,
	errors,
	validation,
	customClass,
}) => {
	const error = () => {
		for (const key in errors) {
			if (key === name) {
				return errors[key]?.message;
			}
		}
	};

	return (
		<div className={cn(styles.container, customClass)}>
			{label !== '' && <label htmlFor={name}>{label}</label>}

			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeHolder}
				{...register(name, validation)}
			/>
			<small>{error()}</small>
		</div>
	);
};

Input.defaultProps = {
	label: '',
	type: 'text',
	validation: {},
	customClass: '',
};

Input.propTypes = {
	errors: PropTypes.shape({}).isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	placeHolder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	validation: PropTypes.shape({}),
	customClass: PropTypes.string,
};

export default Input;
