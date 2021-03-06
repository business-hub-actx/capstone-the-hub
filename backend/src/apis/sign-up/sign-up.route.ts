import { Router } from 'express';
import { signupProfileController } from './sign-up.controller';
import { signupValidator } from './signup.validator';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { activationController }from "./activation.controller";
import { param } from "express-validator";

const { checkSchema } = require('express-validator');

export const SignUpRoute = Router();

SignUpRoute.route('/')
  .post(
    asyncValidatorController(checkSchema(signupValidator)),
    signupProfileController
  );

SignUpRoute.route('/activation/:activation')
  .get(
    asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
    activationController
  )

