import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from '../personajes/personajes.component';
import { Personaje } from '../interfaces/dgz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  standalone: true,
  //formsModule modulo de angular para manejar formularios
  imports: [CommonModule,FormsModule,PersonajesComponent,AgregarComponent],
  providers:[dbzService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

    nuevo:Personaje={
      nombre:"",
      poder:0
    }


  constructor(){

  }
}


