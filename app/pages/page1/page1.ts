import {Page} from 'ionic-angular';
import {CHART_DIRECTIVES} from '../../charts';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [CHART_DIRECTIVES]
})
export class Page1 {
  constructor() {
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
  private barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  private barChartSeries = ['Series A', 'Series B'];
  public barChartType = 'horizontalBar';
  private barChartLegend:boolean = true;

  private barChartData = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}
