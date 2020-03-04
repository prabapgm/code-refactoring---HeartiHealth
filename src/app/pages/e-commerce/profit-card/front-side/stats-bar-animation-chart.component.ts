import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { LayoutService } from '../../../../@core/utils/layout.service';
import { StatsCardFrontComponent } from './stats-card-front.component';

@Component({
  selector: 'ngx-stats-bar-animation-chart',
  template: `
    <div echarts
         [options]="options"
         class="echart"
         (chartInit)="onChartInit($event)">
    </div>
  `,
})
export class StatsBarAnimationChartComponent implements AfterViewInit, OnDestroy {

  private alive = true;

  @Input() linesData: { firstLine: number[]; secondLine: number[] } = {
    firstLine: [],
    secondLine: [],
  };

  echartsIntance: any;
  options: any = {};

  constructor(private theme: NbThemeService,
              private layoutService: LayoutService,
              private StatsCardFrontComponent: StatsCardFrontComponent) {
    this.layoutService.onChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngAfterViewInit() {
    this.theme.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
        const profitBarAnimationEchart: any = config.variables.profitBarAnimationEchart;

        this.setChartOption(profitBarAnimationEchart);
    });
  }

  setChartOption(chartVariables) {
    this.options = {
      color: [
        chartVariables.firstAnimationBarColor,
        chartVariables.secondAnimationBarColor,
      ],
      grid: {
        left: 30,
        top: 31,
        right: 0,
        bottom: 25,
      },
      legend: {
        data: ['predicted', 'cured'],
        borderWidth: 0,
        borderRadius: 0,
        itemWidth: 15,
        itemHeight: 15,
        top:0,        
        textStyle: {
          color: chartVariables.textColor,
        },
      },
      tooltip: {
        axisPointer: {
          type: 'shadow',
        },
        textStyle: {
          color: chartVariables.tooltipTextColor,
          fontWeight: chartVariables.tooltipFontWeight,
          fontSize: chartVariables.tooltipFontSize,
        },
        position: 'top',
        backgroundColor: chartVariables.tooltipBg,
        borderColor: chartVariables.tooltipBorderColor,
        borderWidth: chartVariables.tooltipBorderWidth,
        formatter: params => `${Math.round(parseInt(params.value, 10))}`,
        extraCssText: chartVariables.tooltipExtraCss,
      },
      xAxis: [
        {
          data: this.linesData.firstLine.map((_, index) => this.StatsCardFrontComponent.week[index]),
          silent: true,
          axisLine: {
            show: true, 
            lineStyle: {
              color: chartVariables.textColor,
            },                     
          },
          axisLabel: {
            show: true, 
            color: chartVariables.textColor,           
          },
          axisTick: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: true,
            lineStyle: {
              color: chartVariables.textColor,
            },
          },
          axisLabel: {
            show: true,
            color: chartVariables.textColor,   
          },
          axisTick: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: chartVariables.splitLineStyleColor,
              opacity: chartVariables.splitLineStyleOpacity,
              width: chartVariables.splitLineStyleWidth,
            },
          },
        },
      ],
      series: [
        {
          name: 'predicted',
          type: 'bar',
          data: this.linesData.firstLine,
          animationDelay: idx => idx * 10,
        },
        {
          name: 'cured',
          type: 'bar',
          data: this.linesData.secondLine,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }

  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      this.echartsIntance.resize();
    }
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
