import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contador.component.html',
    styleUrl: './contador.component.css'
})

export class ContadorComponent {
    public title:string = 'Acumulador';
    numero:number = 0;
    base  :number =5;
  
    acumular (valor:number){
      this.numero += valor;
    }
}