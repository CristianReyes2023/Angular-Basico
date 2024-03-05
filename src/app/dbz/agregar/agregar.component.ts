import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dgz.interface';
import { FormsModule } from '@angular/forms';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService:dbzService){

  }
  //Output es utilizado cuando se tiene un componente hijo y necesita emitir un elemento al padre

  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  agregar(){
    if (this.nuevo.nombre.trim().length ===0) {return;} {
      console.log(this.nuevo);
      // this.onNuevoPersonaje.emit(this.nuevo);//Emite un valor,emite del mismo tipo que se designo anterior mente en este caso Personaje 

      this.dbzService.agregarPersonaje(this.nuevo);
      this.nuevo = {
        nombre:'',
        poder: 0
      }
    }
  }

}

//Depuración borrar la carpeta inicial que se genera de Vscode
//Cambiar el local host en el archivo lunch.json
//Volver a presionar f5 para que abra una pestaña aparte 