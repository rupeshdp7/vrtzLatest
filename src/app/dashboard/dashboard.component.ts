import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../_services/dashboard.service";
import { first } from 'rxjs/operators';
import { CsvtojsonService } from "../_services/csvtojson.service";
import { GoogleCharts } from "google-charts";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  period: number = 4;
  camp_earnings:number=0;
  isAdvertiser:boolean=true;
  campaigntrstatus : boolean = true;
  showCampGraph : boolean = true;

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
  earningsData:Object;
  constructor(private dasboardservice: DashboardService, private csvtojson: CsvtojsonService) {
  }
  ngOnInit() {

    const loggedinuserdetails: {} = localStorage.getItem("loggedinuserdetails");
    console.log(loggedinuserdetails);
    this.getCampaignOverview();
    this.getCampaignList();
    this.getEarnings();
    // this.drawChart();
    GoogleCharts.load(this.drawChart);
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
  getEarnings(){
    this.dasboardservice.getAdvertiserEstimatedRevenue()
    .subscribe(stringResponse =>{
      console.log(stringResponse);
      console.log(typeof stringResponse)
      // this.convertCSV2JSON(stringResponse);
    })
  }
  convertCSV2JSON(csv: string) {
    this.performanceData = this.csvtojson.CSV2JSON(csv);
    console.log(this.performanceData);
  }
  drawChart() {
    const data = GoogleCharts.api.visualization.arrayToDataTable([
        ['Chart thing', 'Chart amount'],
        ['Lorem ipsum', 60],
        ['Dolor sit', 22],
        ['Sit amet', 18]
    ]);
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('chart1'));
    pie_1_chart.draw(data);
}

}
