import React from 'react';
import { useForm } from 'react-hook-form';

import { useLanguageContext } from '../../../../lib/contexts/LanguageProvider';

import Input from '../../../InputTypes/Input';
import TextArea from '../../../InputTypes/TextArea';
import Button from '../../../Button';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors },
	} = useForm();

	const { lang } = useLanguageContext();

	const onSubmit = (data) => {
		console.log(data);
		reset();
		setError();
	};

	return (
		<form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
			<Input
				name="name"
				placeHolder={lang ? 'Name' : 'Nome'}
				validation={{
					required: lang
						? 'Enter a valid name'
						: 'Insira um nome válido',
				}}
				register={register}
				errors={errors}
				customClass={styles.containerInput}
			/>

			<Input
				name="email"
				type="email"
				placeHolder={lang ? 'Email' : 'E-mail'}
				validation={{
					required: lang
						? 'Enter a valid email'
						: 'Insira um e-mail válido',
					pattern: {
						value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
						message: lang
							? 'Enter a valid email'
							: 'Insira um e-mail válido',
					},
				}}
				register={register}
				errors={errors}
				customClass={styles.containerInput}
			/>

			<Input
				name="phone"
				placeHolder={lang ? 'Phone' : 'Telefone'}
				validation={{
					required: lang
						? 'Enter a valid phone number'
						: 'Insira um número válido',
					pattern: {
						value: /^[0-9]*$/,
						message: lang
							? 'Only numbers are allowed'
							: 'Apenas números são permitidos',
					},
					minLength: {
						value: 9,
						message: lang
							? 'Enter a valid phone number'
							: 'Insira um número válido',
					},
					maxLength: {
						value: 13,
						message: lang
							? 'Enter a valid phone number'
							: 'Insira um número válido',
					},
				}}
				register={register}
				errors={errors}
				customClass={styles.containerInput}
			/>

			<TextArea
				name="message"
				placeHolder={
					lang ? 'Insert your message...' : 'Insira sua mensagem...'
				}
				validation={{
					required: lang
						? 'Enter a valid message'
						: 'Insira uma mensagem válida',
				}}
				register={register}
				errors={errors}
				customClass={styles.containerTextArea}
			/>

			<Button
				label={lang ? 'Send Message' : 'Enviar Mensagem'}
				type="submit"
				customClass={styles.containerButton}
			/>
		</form>
	);
};

export default ContactForm;
