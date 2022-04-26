import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './TextArea.module.scss';

const TextArea = ({
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

			<textarea
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

TextArea.defaultProps = {
	label: '',
	type: 'text',
	validation: {},
	customClass: '',
};

TextArea.propTypes = {
	errors: PropTypes.shape({}).isRequired,
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeHolder: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
	validation: PropTypes.shape({}),
	customClass: PropTypes.string,
};

export default TextArea;
