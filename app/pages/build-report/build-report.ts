import {Page, Platform} from 'ionic-angular';
import {CHART_DIRECTIVES} from '../../charts';


@Page({
  templateUrl: 'build/pages/build-report/build-report.html',
  directives: [CHART_DIRECTIVES]
})
export class BuildReport {
  private project: string;
  private release: string;
  private build: string;
  private duration: string;
  private startTime: string;
  private endTime: string;

  constructor(platform: Platform) {
    Chart.defaults.global.legend.display = false;
    if(platform.is("mobile")) {
      Chart.defaults.global.defaultFontSize = 12;
    } else {
      Chart.defaults.global.defaultFontSize = 24;
    }
    this.project = "Panel";
    this.release = "3.4.0";
    this.build = "17153";
    this.duration = "2 hrs 5 min";
    this.startTime = "May 7 at 7:02PM"
    this.endTime = "May 7 at 9:07PM"
  }
  private pieChartLabels = ['PASS', 'FAIL'];
  private pieChartData = [436, 338];
  private pieChartOptions = {
    responsive: true
  };
  
  private barChartOptions = {
    scaleShowVerticalLines: false,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
    responsive: true,
    stacked: true
  };
  private barChartLabels = [
    'Panel Defaults Level 2',
    'Camera defaults using gui for Ping',
    'Camera defaults using gui for 520',
    'Camera defaults using gui for Doorbell v1',
    'Security Core BATs',
    'Security Core Level 1',
    'Security Core Level 2'];
  private barChartSeries = ['PASS', 'FAIL'];
  public barChartType = 'horizontalBar';
  private barChartLegend:boolean = true;

  private barChartData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}
