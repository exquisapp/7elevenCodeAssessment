import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { INotification } from './notification.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CardLayoutComponent } from '../card-layout/card-layout.component';
import { NotificationService } from './notification.service';

@Component({
	selector: 'app-notification',
	standalone: true,
	imports: [NgIf, NgFor, NgClass, CardLayoutComponent],
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
	notifications: INotification[] = [];
	private notificationSub: Subscription;

	constructor(
		private notificationService: NotificationService
	) { }


	onRemoveNotification(id: number): void {
		this.notificationService.deleteNotification(id);
	}

	ngOnInit() {
		this.notificationSub = this.notificationService.getNotificationsUpdateListener()
			.subscribe(notifications => {
				this.notifications = notifications;
			});
	}

}
