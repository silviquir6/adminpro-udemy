import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficoDona.component.html',
  styleUrls: ['./graficoDona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
@Input('chartLabels') doughnutChartLabels:string[] = [];
@Input('chartData') doughnutChartData:number[] = [];
@Input('chartType') doughnutChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
