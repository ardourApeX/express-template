import { StatusCodes } from 'http-status-codes';
import { Response, Request } from 'express';

export async function healthCheckController(_req: Request, res: Response) {
	return res.status(StatusCodes.OK).json({ success: true, message: 'OK' });
}
