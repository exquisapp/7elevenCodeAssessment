
export interface INotification {
	id: number;
	type: NotificationType;
	message: string;
}

export enum NotificationTypeEnum {
	SUCCESS = 'success',
	ERROR = 'error',
	// WARNING = 'warn',
	INFORMATION = 'info'
}
export type NotificationType = `${NotificationTypeEnum}`;