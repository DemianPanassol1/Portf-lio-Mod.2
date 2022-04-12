import { check } from 'express-validator';

const requireName = check('name')
	.trim()
	.isLength({ min: 5, max: 40 })
	.withMessage({
		br: 'O campo nome deve conter entre 5 e 40 caracteres',
		eng: 'Name field must contain between 5 to 40 characters',
	});

const requireEmail = check('email')
	.trim()
	.normalizeEmail()
	.isEmail()
	.withMessage({
		br: 'A mensagem deve conter um email válido',
		eng: 'The message must contain a valid email',
	});

const requirePhone = check('phone')
	.trim()
	.isLength({ min: 8, max: 15 })
	.withMessage({
		br: 'A mensagem deve conter um número de telefone válido',
		eng: 'The message must contain a valid phone number',
	});

const requireMessage = check('message').trim().exists().notEmpty().withMessage({
	br: 'O campo de mensagem não pode ficar vazio',
	eng: 'The message field cannot be empty',
});

export { requireName, requireEmail, requirePhone, requireMessage };
