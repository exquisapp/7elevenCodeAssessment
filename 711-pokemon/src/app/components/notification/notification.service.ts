import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { INotification, NotificationType } from './notification.interface';


@Injectable({
	providedIn: 'root'
})
export class NotificationService {
	private timeOut: any;
	private notifications: INotification[] = [];
	private notificationUpdateListener = new Subject<INotification[]>();


	getNotificationsUpdateListener() {
		return this.notificationUpdateListener.asObservable();
	}

	notify(message: string, type: NotificationType = 'success'): void {
		if (this.timeOut) { clearTimeout(this.timeOut); }
		const notification: INotification = {
			id: this.notifications.length + 1,
			type,
			message: message || 'An error occured!',
		};
		this.notifications = [notification, ...this.notifications]; //.push(notification);
		this.notificationUpdateListener.next([...this.notifications]);
		this.getTimeOut();
	}


	deleteNotification(notificationId: number): void {
		this.notifications = this.notifications.filter(item => item.id !== notificationId);
		this.notificationUpdateListener.next([...this.notifications]);
	}

	private getTimeOut(): void {
		this.timeOut = setTimeout(() => {
			this.notificationUpdateListener.next([]);
			this.notifications = [];
		}, 7000);
	}

}
