import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AllExceptionFilter, HttpExceptionFilter } from './filter';

async function bootstrap() {
	const application = await NestFactory.create<NestExpressApplication>(AppModule);
	application.setGlobalPrefix('api');
	application.enableCors();
	application.useGlobalFilters(new AllExceptionFilter, new HttpExceptionFilter);
	application.useGlobalPipes(new ValidationPipe({
		whitelist: true, transform: true,
		transformOptions: { enableImplicitConversion: true }
	}));

	const config = new DocumentBuilder()
		.setTitle('Pokemon API')
		.setDescription('7Eleven pokemon API description')
		.setVersion('1.0')
		.addTag('pokemon')
		.build();
	const document = SwaggerModule.createDocument(application, config);
	SwaggerModule.setup('api/docs', application, document);

	await application.listen(3000);
}
bootstrap();
