import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = createTransport(
	new SMTPTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	}),
);

const emailInfo = (name, email, phone, message) => {
	return {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_DEST,
		subject: 'Mensagem vinda do Portifólio V3',
		html: `
        <h2>Mensagem de cliente</h2>
        <ul>
            <li><p>Nome: ${name}</p></li>
            <li><p>Telefone: ${phone}</p></li>
            <li><p>E-mail: ${email}</p></li>
            <li><p>Mensagem do Cliente: ${message}</p></li>
        </ul>
        `,
	};
};

export { transporter, emailInfo };
