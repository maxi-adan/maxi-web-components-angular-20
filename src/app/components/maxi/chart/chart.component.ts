import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsChart } from 'maxi-angular-components';

@Component({
  selector: 'Chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  imports: [MsChart, CommonModule]
})
export class ChartComponent {

  readonly barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{ label: 'Sales 2024', data: [65, 59, 80, 81, 56, 55] }],
  };

  readonly lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      { label: 'Revenue',  data: [12000, 19000, 15000, 25000, 22000, 30000], fill: false, tension: 0.1 },
      { label: 'Expenses', data: [8000,  12000, 10000, 15000, 14000, 18000], fill: false, tension: 0.1 },
    ],
  };

  readonly pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
    datasets: [{
      data: [12, 19, 3, 5, 8],
      backgroundColor: [
        'rgba(255,99,132,0.8)', 'rgba(54,162,235,0.8)', 'rgba(255,206,86,0.8)',
        'rgba(75,192,192,0.8)', 'rgba(255,159,64,0.8)',
      ],
    }],
  };

  readonly doughnutData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [{ data: [55, 35, 10] }],
  };

  readonly radarData = {
    labels: ['Speed', 'Strength', 'Endurance', 'Agility', 'Accuracy', 'Technique'],
    datasets: [
      { label: 'Player A', data: [85, 70, 90, 75, 80, 88], fill: true },
      { label: 'Player B', data: [70, 85, 75, 90, 85, 70], fill: true },
    ],
  };

  readonly bubbleData = {
    datasets: [
      { label: 'Sales Q1', data: [{ x: 20, y: 30, r: 15 }, { x: 40, y: 10, r: 10 }, { x: 30, y: 22, r: 20 }] },
      { label: 'Sales Q2', data: [{ x: 15, y: 25, r: 12 }, { x: 35, y: 35, r: 18 }, { x: 25, y: 15, r: 8  }] },
    ],
  };

  readonly polarData = {
    labels: ['Marketing', 'Development', 'Sales', 'Support', 'Operations'],
    datasets: [{ label: 'Budget by department', data: [11, 16, 7, 9, 13] }],
  };

  readonly scatterData = {
    datasets: [
      { label: 'Group A', data: [{ x: 10, y: 20 }, { x: 15, y: 25 }, { x: 20, y: 30 }, { x: 25, y: 28 }, { x: 30, y: 35 }, { x: 35, y: 33 }] },
      { label: 'Group B', data: [{ x: 12, y: 15 }, { x: 18, y: 22 }, { x: 22, y: 18 }, { x: 28, y: 25 }, { x: 32, y: 28 }, { x: 38, y: 32 }] },
    ],
  };

  readonly stackedBarData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      { label: 'Product A', data: [50, 60, 70, 80, 75, 90] },
      { label: 'Product B', data: [30, 40, 35, 45, 50, 55] },
      { label: 'Product C', data: [20, 25, 30, 28, 35, 40] },
    ],
  };

  readonly stackedLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      { label: 'North Region',   data: [40, 45, 50, 55, 60, 65], fill: true },
      { label: 'Central Region', data: [30, 35, 40, 38, 45, 50], fill: true },
      { label: 'South Region',   data: [25, 28, 32, 30, 35, 40], fill: true },
    ],
  };

  readonly multiPieData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      { label: '2023', data: [30, 25, 20, 25] },
      { label: '2024', data: [35, 20, 25, 20] },
    ],
  };

  readonly mixedChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      { type: 'bar',  label: 'Revenue',  data: [50000, 62000, 71000, 83000, 76000, 91000] },
      { type: 'bar',  label: 'Expenses', data: [32000, 37000, 43000, 48000, 44000, 52000] },
      { type: 'line', label: 'Profit',   data: [18000, 25000, 28000, 35000, 32000, 39000], fill: false, tension: 0.4, borderWidth: 2, pointRadius: 4 },
    ],
  };

  readonly dynamicData = {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [{ label: 'Values', data: [10, 45, 30, 70, 55], backgroundColor: 'rgba(75,192,192,0.5)' }],
  };

  readonly dropAnimData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      { label: 'Dataset 1', data: [65, 59, 80, 81, 56, 55] },
      { label: 'Dataset 2', data: [45, 69, 60, 71, 46, 65] },
    ],
  };

  readonly loopAnimData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{ label: 'Sales', data: [65, 59, 80, 81, 56, 55] }],
  };

  readonly delayAnimData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { label: 'Dataset 1', data: [65, 59, 80, 81, 56, 55, 40] },
      { label: 'Dataset 2', data: [28, 48, 40, 19, 86, 27, 90] },
      { label: 'Dataset 3', data: [45, 25, 16, 36, 67, 18, 76] },
    ],
  };

  readonly progressiveLineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{ label: 'Sales 2024', data: [65, 59, 80, 81, 56, 55, 72, 68, 90, 85, 78, 92], borderWidth: 2, fill: false, pointRadius: 4 }],
  };

  readonly progEasingData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{ label: 'Trend', data: [65, 59, 80, 81, 56, 55, 72, 68, 90, 85, 78, 92], borderWidth: 3, tension: 0, fill: false, pointRadius: 5 }],
  };

  // ── Options ──────────────────────────────────────────────────────────────────

  readonly bubbleOptions = {
    scales: {
      x: { title: { display: true, text: 'Customers (thousands)' } },
      y: { title: { display: true, text: 'Revenue (USD thousands)' } },
    },
  };

  readonly polarAreaOptions = { plugins: { legend: { position: 'right' } } };

  readonly scatterOptions = {
    scales: {
      x: { title: { display: true, text: 'Variable X' } },
      y: { title: { display: true, text: 'Variable Y' } },
    },
    plugins: { title: { display: true, text: 'Correlation between variables' } },
  };

  readonly stackedBarOptions = {
    scales: {
      x: { stacked: true },
      y: { stacked: true, title: { display: true, text: 'Total sales' } },
    },
    plugins: { title: { display: true, text: 'Sales stacked by product' } },
  };

  readonly stackedLineOptions = {
    scales: {
      x: { title: { display: true, text: 'Month' } },
      y: { stacked: true, title: { display: true, text: 'Cumulative sales' } },
    },
    plugins: { title: { display: true, text: 'Sales by region (stacked)' } },
  };

  readonly multiPieOptions = {
    plugins: { title: { display: true, text: 'Sales distribution by year' } },
  };

  readonly mixedChartOptions = {
    scales: { y: { beginAtZero: true, title: { display: true, text: 'Amount (USD)' } } },
    plugins: { title: { display: true, text: 'Revenue, Expenses & Profit' } },
  };

  readonly dropAnimOptions = {
    animations: {
      y: { easing: 'easeInOutElastic', duration: 1500, loop: true, from: 0 },
    },
  };

  readonly loopAnimOptions = {
    animations: {
      y: {
        duration: 800,
        easing: 'easeInOutSine',
        loop: true,
        from: (ctx: any) => ctx.chart.scales.y.max,
      },
    },
  };

  readonly delayAnimOptions = {
    animations: {
      y: {
        duration: 600,
        easing: 'easeInOutQuart',
        loop: true,
        from: 0,
        delay: (ctx: any) => ctx.dataIndex * 150 + ctx.datasetIndex * 50,
      },
    },
    scales: { x: { stacked: true }, y: { stacked: true } },
  };

  readonly progressiveLineOptions = {
    animations: {
      tension: { duration: 1000, easing: 'linear', from: 1, to: 0, loop: true },
    },
  };

  readonly progEasingOptions = {
    animations: {
      y: {
        type: 'number',
        easing: 'easeOutQuart',
        duration: 4000 / 12,
        loop: true,
        from: (ctx: any) =>
          ctx.index === 0
            ? ctx.chart.scales.y.getPixelForValue(100)
            : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y,
        delay: (ctx: any) => ctx.index * (4000 / 12),
      },
    },
  };
}
