import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { dbzService } from '../services/dbz.service';



@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent {

  // @Input()personajes:Personaje[]=[]
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:dbzService){
    
  }

}
