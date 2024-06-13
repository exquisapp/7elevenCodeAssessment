import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs';


@Injectable()
export class HelperService {

	constructor(
		private readonly httpService: HttpService
	) { }

	async sendHttpRequest<TResponse = any, TBody extends Record<string, any> = any>(options: AxiosRequestConfig<TBody> & { onlyWhenSettled?: boolean },): Promise<TResponse> {
		try {
			options.onlyWhenSettled = options.onlyWhenSettled || false;
			const response = await lastValueFrom(this.httpService.request({ ...options })) as unknown as AxiosResponse<TResponse, TBody>;
			return response.data as TResponse;
		} catch (error) {
			const errorObject = error?.response?.data;
			const message = errorObject?.message || error?.response?.data || error.message || 'Error occured in the http call!'
			if (options.onlyWhenSettled) {
				return null;
			}
			throw { message, ...errorObject };
		}
	}
}
