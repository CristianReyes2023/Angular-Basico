import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContadorComponent }from './Contador/contador.component';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ContadorComponent,HeroeComponent,ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  public title: string = 'Acumulador';
  numero: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
