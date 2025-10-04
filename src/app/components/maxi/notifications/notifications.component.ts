import { Component } from '@angular/core';
import { MsBadge, MsNotification } from 'maxi-angular-components';

const LIFETIME = 3000;

const CONTENT: any = {
  alert: {
    severity: "alert",
    summary: "Alert",
    detail: "The action could not be processed",
    position: "bottom-center",
  },
  info: {
    severity: "info",
    summary: "Info",
    detail: "The action was successful",
    position: "top-right",
  },
  success: {
    severity: "success",
    summary: "Success",
    detail: "Action was carried out successfully",
    position: "top-left",
  },
  warning: {
    severity: "warning",
    summary: "Warning",
    detail: "This action cannot be undone",
    position: "bottom-right",
  },
};

@Component({
  selector: 'Notifications',
  standalone: true,
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [MsBadge, MsNotification]
})
export class NotificationsComponent {

  visible = false;
  content = CONTENT.alert;
  lifetime = LIFETIME;

  fakeAsyncFunction = (data: any, delay: any) => {
    let timeout: any;
    return new Promise((resolve) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };

  handleClick = async (severity: any) => {
    try {
      this.visible = true;
      this.content = CONTENT[severity];

      await this.fakeAsyncFunction("Hello, World!", LIFETIME);
    } catch (err) {
      //error
    } finally {
      this.visible = false;
    }
  };

}