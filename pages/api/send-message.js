import isValidate from '../../server/middleware/express-validator/express_validator';
import {
	emailInfo,
	transporter,
} from '../../server/middleware/nodemailer/nodemailer';

async function handler(req, res) {
	try {
		const { name, email, phone, message } = req.body;

		transporter.sendMail(
			emailInfo(name, email, phone, message),
			(error) => {
				if (error) {
					return res.status(502).json({
						message: {
							br: 'Algo deu errado. Por favor, tente novamente',
							eng: 'Something went wrong. Please, try again',
						},
					});
				}
			},
		);

		return res.status(200).json({
			message: {
				br: 'Mensagem enviada com sucesso!',
				eng: 'Message send successful!',
			},
		});
	} catch (error) {
		return res
			.status(500)
			.json({ message: { br: 'Erro no servidor', eng: 'Server error' } });
	}
}

export default isValidate(handler);
