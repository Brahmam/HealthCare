import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'notify-user',
   templateUrl: './app/Components/Shared/Notifications/Notification.html'
})
export class NotifyComponent {
    @Input() notificationOptions: {};
   
}