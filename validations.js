import { body } from 'express-validator'

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5}),
    body('fullName').isLength({ min: 5}),
    body('avatarUrl').optional().isURL(),
];

export const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 5}),
];

export const postCreationValidation = [
    body('title').isLength({ min: 3, }).isString(),
    body('text').isLength({ min: 10}).isString(),
    body('tags').optional().isString(),
    body('imageUrl').optional().isString(),
];