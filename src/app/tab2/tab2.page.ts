import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var shealth: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  platformReady: Boolean = false;

  constructor(private platform: Platform) {

  }

  ngOnInit() {
    this.checkPlatformReady();
  }

  async checkPlatformReady() {
    const ready = !!await this.platform.ready();
    console.log('READY: ' + ready);
  }

  success(msg) {
    console.log(msg);
    alert(msg);
  }

  error(msg) {
    alert('ERROR: ' + msg);
  }

  greet() {
    shealth.greet('World', this.success, this.error);
  }

  apiConnect() {
    shealth.connectToSHealth('', this.success, this.error);
  }

  apiPermissions() {
    shealth.callHealthPermissionManager('', this.success, this.error);
  }

  apiGetData() {
    const startDate = new Date(new Date().getTime() - 10 * 24 * 60 * 60 * 1000).getTime();
    const endDate = new Date().getTime();
    shealth.getDataFromSHealth(startDate, endDate, this.success, this.error);
  }
}
