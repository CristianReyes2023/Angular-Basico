import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroeComponent } from '../Heroe/heroe.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
    heroes:string[] = ['Hulk','Thor','Spiderman','Capitan América','Batman','Groot'];
    heroeBorrado:string='';
    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }
    
}
