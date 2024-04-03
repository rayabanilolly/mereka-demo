import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  @Input() data: any = [];

  chart!: any;
  dataset: any = {
    labels: [],
    data: [],
    backgroundColor: ['#eee', '#f90'],
  };

  ngOnInit(): void {
    this.initChartData();
    this.initChart();
  }


  initChartData(): void {
    const transformedData = this.data.reduce((acc: any, task: any) => {
      if (task.completed) {
        acc.completed++;
      } else {
        acc.incompleted++;
      }
      return acc;
    }, { completed: 0, incompleted: 0 });

    this.dataset.labels = ['completed', 'incompleted']
    this.dataset.data = [transformedData.completed, transformedData.incompleted];
  }

  initChart() {
    this.chart = new Chart("task-chart", {
      type: 'pie',
      data: {
        labels: this.dataset.labels,
        datasets: [{
          data: this.dataset.data
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
          }
        }
      }
    })
  }
}
