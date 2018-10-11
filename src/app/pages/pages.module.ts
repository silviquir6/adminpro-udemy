import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule} from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/graficoDona/graficoDona.component';

@NgModule({

declarations: [
  DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
],
exports: [
  DashboardComponent,
  ProgressComponent,
  PagesComponent,
  Graficas1Component,
  IncrementadorComponent
],
imports: [
  SharedModule, PAGES_ROUTES, FormsModule,ChartsModule
]

})

export class PagesModule {}
