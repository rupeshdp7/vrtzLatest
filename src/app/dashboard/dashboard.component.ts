import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../_services/dashboard.service";
import { first } from 'rxjs/operators';
import { CsvtojsonService } from "../_services/csvtojson.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  period: number = 4;
  searchObject: Object = {
    "searchQuery": "",
    "userId": "", "creativeTypeId": "",
    "status": "", "orderby": "campaign_id",
    "orderType": "DESC", "startIndex": 0,
    "maxIndex": 50, "roleId": "",
    "actionId": "0", "adopsUserId": "",
    "productId": "", "mediaChannelId": 0,
    "actionName": "", "value": "", "ids": "",
    "subgroupId": 0, "idForNotification": 0,
    "transitionType": "", "groupId": 0, "fromDateString": "", "toDateString": ""
  }
  campaignList: Object = { 'totalCount': 0, records: [] };
  performanceData: Object;
  constructor(private dasboardservice: DashboardService, private csvtojson: CsvtojsonService) {
  }
  ngOnInit() {

    const loggedinuserdetails: {} = localStorage.getItem("loggedinuserdetails");
    console.log(loggedinuserdetails);
    this.getCampaignOverview();
    this.getCampaignList();
  }
  getCampaignOverview() {
    this.dasboardservice.getCampaignOverviews(this.period).subscribe(stringResponse => {
      this.convertCSV2JSON(stringResponse);
      console.log(stringResponse)
    }, error => {
      console.log(error.error)
    })
  }
  getCampaignList() {
    this.dasboardservice.getCampaignLists(this.searchObject).pipe(first())
      .subscribe((campaignList: Object) => {
        this.campaignList = campaignList;
        console.log(typeof campaignList);
      })
  }
  convertCSV2JSON(csv: string) {
    this.performanceData = this.csvtojson.CSV2JSON(csv);
    console.log(this.performanceData);
  }
}
