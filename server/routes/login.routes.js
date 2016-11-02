import { Router } from 'express';
import * as LoginController from '../controllers/login.controller';

const router = new Router();

// Login
router.route('/login').post(LoginController.signIn);

export default router;
