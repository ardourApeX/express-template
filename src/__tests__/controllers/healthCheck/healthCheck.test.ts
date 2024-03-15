import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { app } from '@/server';

describe('Health Check API endpoints', () => {
	it('GET / - success', async () => {
		const response = await request(app).get('/api/v1/health-check');
		expect(response.status).toBe(StatusCodes.OK);
		expect(response.body).toStrictEqual({ success: true, message: 'OK' });
	});
});
