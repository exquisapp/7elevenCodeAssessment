import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const http = host.switchToHttp();
		const response = http.getResponse<Response>();
		const { method, url } = http.getRequest<Request>();
		const statusCode = exception?.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
		let message: string = (exception as Record<string, any>)?.response?.message || exception?.message || 'Internal server error';
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