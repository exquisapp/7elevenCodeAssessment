import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';


@Catch()
export class AllExceptionFilter implements ExceptionFilter {
	catch(exception: Record<string, any>, host: ArgumentsHost) {
		const http = host.switchToHttp();
		const response = http.getResponse<Response>();
		const { method, url } = http.getRequest<Request>();
		const statusCode = exception instanceof HttpException ? exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.INTERNAL_SERVER_ERROR;
		let message = exception.response?.message as string || exception?.message || 'Internal server error!';
		if (Array.isArray(message)) {
			message = JSON.stringify(message);
		}

		const error = {
			statusCode,
			method,
			path: url,
			message
		};
		response.status(statusCode).json({ message, error });
	}
}