import {Page} from 'ionic-angular';
import {CHART_DIRECTIVES} from '../../charts';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [CHART_DIRECTIVES]
})
export class BuildReport {
  private project: string;
  private release: string;
  private build: string;

  constructor() {
    this.project = "Panel";
    this.release = "3.4.0";
    this.build = "17153";
  }
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