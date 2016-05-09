import {IONIC_DIRECTIVES, Platform} from 'ionic-angular';
import {CHART_DIRECTIVES} from '../../charts';
import {Component, Input} from 'angular2/core';
import {BuildReportData, TestrunData} from '../../build-report-data';


@Component({
  selector: 'build-report',
  templateUrl: 'build/pages/build-report/build-report.html',
  directives: [CHART_DIRECTIVES, IONIC_DIRECTIVES],
  properties: [
      'buildReportData'
  ]
})
export class BuildReport {
  private _duration: string;
  private _pieChartData: Array<number> = [];
  private _barChartLabels: Array<string> = [];
  private _barChartData: Array<Array<number>> = [];
  private _start: number;
  private _end: number;
  private _startTime: string;
  private _endTime: string;

  @Input public buildReportData: BuildReportData;
  
  private statusListOrdered: Array<string> = [
      "PASS",
      "FAIL",
      "BROKEN_TEST",
      "NO_RESULT",
      "SKIPPED"
  ];

  get project() {
    if(this.buildReportData.testruns) {
      return this.buildReportData.testruns[0].project.name;
    } else {
      return "";
    }
  }
  
  get release() {
    if(this.buildReportData.testruns) {
      return this.buildReportData.testruns[0].release.name;
    } else {
      return "";
    }
  }
  
  get build() {
    if(this.buildReportData.testruns) {
      return this.buildReportData.testruns[0].build.name;
    } else {
      return "";
    }
  }

  get pieChartLabels() {
    return this.statusListOrdered;
  }
  
  get barChartSeries() {
    return this.statusListOrdered;
  }

  get pieChartData() {
    var retval: Array<number> = [];
    for(var statusName of this.statusListOrdered) {
      if(this.buildReportData.groupSummary) {
        retval.push(this.buildReportData.groupSummary.resultsByStatus[statusName]);
      }
    }
    if(!_.isEqual(retval, this._pieChartData)) {
      this._pieChartData = retval;
    }

    return this._pieChartData;
  }
  
  get barChartLabels() {
    var retval: Array<string> = [];
    if(this.buildReportData.testruns) {
      for (var testrun:TestrunData of this.buildReportData.testruns) {
        retval.push(testrun.name);
      }
    }
    if(!_.isEqual(retval, this._barChartLabels)) {
      this._barChartLabels = retval;
    }
    return this._barChartLabels;
  }
  
  get barChartData() {
    var retval: Array<Array<number>> = [];
    for(var statusName:string of this.statusListOrdered) {
      var testrunResults: Array<number> = [];
      if(this.buildReportData.testruns) {
        for (var testrun:TestrunData of this.buildReportData.testruns) {
          testrunResults.push(testrun.summary.resultsByStatus[statusName]);
        }
        retval.push(testrunResults);
      }
    }
    if(!_.isEqual(retval, this._barChartData)) {
      this._barChartData = retval;
    }
    return this._barChartData;
  }
  
  findStartAndEnd() {
    var oldest: number = new Date().getTime();
    var newest: number = 0;
    for(var testrun of this.buildReportData.testruns) {
      if (testrun.runStarted < oldest) {
        oldest = testrun.runStarted;
      }
      if (testrun.runFinished > newest) {
        newest = testrun.runFinished;
      }
    }
    this._start = oldest;
    this._end = newest;
  }
  
  get duration() {
    if(this.buildReportData.testruns) {
      this.findStartAndEnd();
      let totalMilliseconds = this._end - this._start;
      let hours = Math.floor(totalMilliseconds / (60 * 60 * 1000));
      let leftover = totalMilliseconds - (hours * (60 * 60 * 1000));
      let minutes = Math.floor(leftover / (60 * 1000));
      let retval = "" + hours + " hours " + minutes + " minutes";
      if (retval !== this._duration) {
        this._duration = retval;
      }
    }
    return this._duration;
  }
  

  get startTime() {
    var oldest: number = new Date().getTime();
    if(this.buildReportData.testruns) {
      for (var testrun of this.buildReportData.testruns) {
        if (testrun.runStarted < oldest) {
          oldest = testrun.runStarted;
        }
      }
    }
    var startTimeObj = new Date(oldest);
    if(startTimeObj.toLocaleString() !== this._startTime) {
      this._startTime = startTimeObj.toLocaleString();
    }
    return this._startTime;
  }

  get endTime() {
    var newest: number = 0;
    if(this.buildReportData.testruns) {
      for (var testrun of this.buildReportData.testruns) {
        if (testrun.runFinished > newest) {
          newest = testrun.runFinished;
        }
      }
    }
    var endTimeObj = new Date(newest);
    if(endTimeObj.toLocaleString() !== this._startTime) {
      this._endTime = endTimeObj.toLocaleString();
    }
    return this._endTime;
  }

  constructor(platform: Platform) {
    Chart.defaults.global.legend.display = false;
    if(platform.is("mobile")) {
      Chart.defaults.global.defaultFontSize = 12;
    } else {
      Chart.defaults.global.defaultFontSize = 24;
    }
  }
  
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

}
