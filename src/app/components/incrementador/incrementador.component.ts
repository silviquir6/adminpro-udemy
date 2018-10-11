import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtProgress') txtProgress: ElementRef;
 @Input() leyenda: string = 'Leyenda';
 @Input() porcentaje: number = 50;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  //console.log('leyenda:', this.leyenda);
  //console.log('porcentaje:', this.porcentaje);
}

  ngOnInit() {
    //console.log('leyenda:', this.leyenda);
  }

  onChanges(newValue : number){

    console.log(this.txtProgress);

    if (newValue >= 100){
      this.porcentaje=100;
    } else
    if (newValue <= 0){
      this.porcentaje=0;
    }
    else{
    this.porcentaje= newValue;
    }
    this.txtProgress.nativeElement.value= this.porcentaje;
    this.cambioValor.emit (this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

  cambiarvalor(valor) {

    if (this.porcentaje >= 100 && valor > 0 )
    {return;}

    if (this.porcentaje <= 0 && valor < 0 )
    {return;}

this.porcentaje = this.porcentaje + valor;

this.cambioValor.emit (this.porcentaje);
  }
}
