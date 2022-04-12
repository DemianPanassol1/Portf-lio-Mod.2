import { validationResult } from 'express-validator';
import runMiddleware from '../init_middleware';
import {
	requireEmail,
	requireMessage,
	requireName,
	requirePhone,
} from './validators';

function isValidate(handler) {
	return async (req, res) => {
		if (req.method !== 'POST') {
			return res.status(404).json({
				message: { br: 'Acesso negado', eng: 'Acess denied' },
			});
		}

		await runMiddleware(
			req,
			res,
			validate(
				[requireName, requireEmail, requirePhone, requireMessage],
				validationResult,
			),
		);

		return handler(req, res);
	};
}

export default isValidate;

function validate(validations, validationResult) {
	return async (req, res, next) => {
		await Promise.all(validations.map((validation) => validation.run(req)));

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ message: errors.array()[0].msg });
		}

		return next();
	};
}
