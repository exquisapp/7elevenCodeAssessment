import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { NotificationTypeEnum } from '../components/notification/notification.interface';
import { NotificationService } from '../components/notification/notification.service';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
	const notificationService = inject(NotificationService);

	return next(request).pipe(
		catchError((error: HttpErrorResponse) => {
			const errorObject = error.error?.error || error.error;
			const status = error?.status;
			console.log(errorObject);
			if (status) {
				notificationService.notify(errorObject.message, NotificationTypeEnum.ERROR);
			} else {
				notificationService.notify(error.statusText, NotificationTypeEnum.ERROR);
			}
			return throwError(() => errorObject);
		})
	);
}