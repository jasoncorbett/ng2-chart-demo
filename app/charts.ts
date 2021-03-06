import {
  Component, OnDestroy, OnInit, OnChanges,
  EventEmitter, ElementRef, Input
} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

declare var Chart:any;

@Component({
  selector: 'chart',
  template: `<canvas></canvas>`,
  directives: [CORE_DIRECTIVES, NgClass]
})
export class ChartsComponent {}

@Component({
  selector: 'base-chart',
  properties: [
    'data',
    'labels',
    'series',
    'colors',
    'chartType',
    'legend',
    'options'
  ],
  events: ['chartClick', 'chartHover'],
  template: `
  <canvas style="width: 100%; height: 100%;" (click)="click($event)" (mousemove)="hover($event)"></canvas>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass]
})
export class BaseChartComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public data:Array<any> = [];
  @Input() public labels:Array<any> = [];
  @Input() public options:any = {responsive: true};
  @Input() public chartType:string;
  @Input() public series:Array<any> = [];
  @Input() public colors:Array<any> = [];
  @Input() public legend:boolean;

  private ctx:any;
  private cvs:any;
  private parent:any;
  private chart:any;
  private legendTemplate:any;
  private initFlag:boolean = false;
  private chartClick:EventEmitter<any> = new EventEmitter();
  private chartHover:EventEmitter<any> = new EventEmitter();
  private defaultsColours:Array<any> = [
    {
      backgroundColor: 'rgba(0,105,0,0.9)',
      borderColor: 'rgba(0,90,0,1)',
      borderWidth: 1,
      pointColor: 'rgba(0,176,0,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(0,176,0,0.8)',
      color: 'rgba(0,176,0,1)',
      highlight: 'rgba(0,176,0,0.8)'
    }, {
      backgroundColor: 'rgba(140,0,0,0.9)',
      borderColor: 'rgba(110,0,0,1)',
      borderWidth: 1,
      pointColor: 'rgba(255,0,0,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(255,0,0,0.8)',
      color: 'rgba(255,0,0,1)',
      highlight: 'rgba(255,0,0,0.8)'
    }, {
      backgroundColor: 'rgba(230,115,0,0.9)',
      borderColor: 'rgba(153,77,0,1)',
      borderWidth: 1,
      pointColor: 'rgba(230,115,0,0.9)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(230,115,0,0.9)',
      color: 'rgba(230,115,0,0.9)',
      highlight: 'rgba(230,115,0,0.8)'
    }, {
      backgroundColor: 'rgba(166,166,166,0.6)',
      borderColor: 'rgba(150,150,150,1)',
      borderWidth: 1,
      pointColor: 'rgba(166,166,166,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(166,166,166,0.8)',
      color: 'rgba(166,166,166,1)',
      highlight: 'rgba(166,166,166,0.5)'
    }, {
      backgroundColor: 'rgba(0,0,200,0.9)',
      borderColor: 'rgba(0,0,150,1)',
      borderWidth: 1,
      pointColor: 'rgba(0,0,200,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(0,0,200,0.8)',
      color: 'rgba(0,0,200,1)',
      highlight: 'rgba(0,0,200,0.8)'
    }, {
      backgroundColor: 'rgba(148,159,177,0.8)',
      borderColor: 'rgba(148,159,177,1)',
      borderWidth: 1,
      pointColor: 'rgba(148,159,177,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(148,159,177,0.8)',
      color: 'rgba(148,159,177,1)',
      highlight: 'rgba(148,159,177,0.8)'
    }, {
      backgroundColor: 'rgba(77,83,96,0.8)',
      borderColor: 'rgba(77,83,96,1)',
      borderWidth: 1,
      pointColor: 'rgba(77,83,96,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(77,83,96,0.8)',
      color: 'rgba(77,83,96,1)',
      highlight: 'rgba(77,83,96,0.8)'
    }];

  private element:ElementRef;
  public constructor(element:ElementRef) {
    this.element = element;
  }

  public ngOnInit():any {
    this.ctx = this.element.nativeElement.children[0].getContext('2d');
    this.cvs = this.element.nativeElement.children[0];
    this.parent = this.element.nativeElement;
    this.refresh();
    this.initFlag = true;
  }

  public ngOnChanges():any {
    if (this.initFlag) {
      this.refresh();
    }
  }

  public ngOnDestroy():any {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
    if (this.legendTemplate) {
      this.legendTemplate.destroy();
      this.legendTemplate = void 0;
    }
  }

  public setLegend():void {
    let list = this.parent.getElementsByTagName('ul');
    if (list.length) {
      list[0].remove();
      this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
    } else {
      this.parent.insertAdjacentHTML('beforeend', this.chart.generateLegend());
    }
  }

  public getColour(colour:Array<number>):any {
    return {
      backgroundColor: this.rgba(colour, 0.6),
      borderColor: this.rgba(colour, 1),
      borderWidth: 1,
      pointColor: this.rgba(colour, 1),
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: this.rgba(colour, 0.8),
      color: this.rgba(colour, 1),
      highlight: this.rgba(colour, 0.8)
    };
  }

  public getRandomInt(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public rgba(colour:Array<number>, alpha:number):string {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
  }

  public click(evt:any):void {
    let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
    let activePoints = atEvent.call(this.chart, evt);
    if (activePoints.length > 0) {
      let activeLabel = activePoints[0].label;
      this.chartClick.emit({activePoints: activePoints, activeLabel: activeLabel});
    }
  }

  public hover(evt:any):void {
    let atEvent = this.chart.getPointsAtEvent || this.chart.getBarsAtEvent || this.chart.getSegmentsAtEvent;
    if (atEvent) {
      let activePoints = atEvent.call(this.chart, evt);
      if (activePoints.length > 0) {
        let activeLabel = activePoints[0].label;
        let activePoint = activePoints[0].value;
        this.chartHover.emit({activePoints: activePoints, activePoint: activePoint, activeLabel: activeLabel});
      }
    }
  }

  public getChartBuilder(ctx:any, data:Array<any>, options:any):any {
    return new Chart(ctx, {
      type: this.chartType,
      data: data, 
      options: options
    });
  }

  public getDataObject(label:string, value:any):any {
    if (this.chartType === 'line'
      || this.chartType === 'bar'
       || this.chartType === 'horizontalBar'
      || this.chartType === 'radar') {
      return {
        label: label,
        data: value
      };
    }

    if (this.chartType === 'pie'
      || this.chartType === 'doughnut'
      || this.chartType === 'polarArea') {
      return {
        label: label,
        value: value
      };
    }

    return void 0;
  }

  public getChartData(labels:any, dataObject:any):any {
      return {
        labels: labels,
        datasets: dataObject
      };
  }

  private refresh():any {
    if (this.options.responsive && this.parent.clientHeight === 0) {
      return setTimeout(() => this.refresh(), 50);
    }

    this.ngOnDestroy();
    let dataset:Array<any> = [];

    if (this.chartType === 'pie'
        || this.chartType === 'doughnut'
        || this.chartType === 'polarArea') {
      let dataItem = {
        data: this.data
      };
      for(let i = 0; i < this.data.length; i++) {
        for(var colorProp in this.defaultsColours[i]) {
          if(colorProp in dataItem) {
            (dataItem[colorProp]).push(this.defaultsColours[i][colorProp]);
          } else {
            dataItem[colorProp] = [this.defaultsColours[i][colorProp]];
          }
        }
      }

      dataset.push(dataItem);

    } else {
      for (let i = 0; i < this.data.length; i++) {
        let colourDesc:Array<number> = [this.getRandomInt(0, 255), this.getRandomInt(0, 255), this.getRandomInt(0, 255)];
        let colour = i < this.colors.length ? this.colors[i] : this.defaultsColours[i] || this.getColour(colourDesc);

        let data:any = Object.assign(colour,
            this.getDataObject(this.series[i] || this.labels[i], this.data[i]));

        dataset.push(data);
      }
    }

    let data:any = this.getChartData(this.labels, dataset);
    this.chart = this.getChartBuilder(this.ctx, data, this.options);

    if (this.legend) {
      this.setLegend();
    }
  }
}

export const CHART_DIRECTIVES:Array<any> = [ChartsComponent, BaseChartComponent];
