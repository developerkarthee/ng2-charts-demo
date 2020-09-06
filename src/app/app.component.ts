import { Component, VERSION } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import 'chart.piecelabel.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

 public pieChartOptions: any = {
    //responsive: true,
    //showAllTooltips:true,
    legend: {
      display: true,
      labels: {
        fontColor: 'black'
      },
      position:'bottom'
    },
    pieceLabel: {
      render: function (args) {
        const label = args.label,
              value = args.value;
              
        return args.percentage + '%';
      }
    }
  }

  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public chartClicked(e: any): void {
if (e.active.length > 0) {
const chart = e.active[0]._chart;
const activePoints = chart.getElementAtEvent(e.event);
  if ( activePoints.length > 0) {
    // get the internal index of slice in pie chart
    const clickedElementIndex = activePoints[0]._index;
    const label = chart.data.labels[clickedElementIndex];
    // get value by index
    const value = chart.data.datasets[0].data[clickedElementIndex];
    console.log(clickedElementIndex, label, value)
  }
 }
}

}
