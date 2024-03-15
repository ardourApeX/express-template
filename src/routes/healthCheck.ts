import { healthCheckController } from '@/controllers/healthCheck/healthCheck';
import express, { Router } from 'express';

const healthCheckRouter: Router = (() => {
	const router = express.Router();

	router.get('/', healthCheckController);

	return router;
})();
export default healthCheckRouter;
