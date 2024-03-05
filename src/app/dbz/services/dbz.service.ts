import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dgz.interface";

//Decorador es de tipo Injectable(), es una clase que se puede inyectar

//El servicio es un lugar centralizado en el cual usted va a tener la información
@Injectable()
export class dbzService {

    private _personajes:Personaje[]=[ //esto permite que solo se modifique en los servicios
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder:12500
        },
        {
          nombre:'Gohan',
          poder:10000
        }
      ]
      
      get personajes():Personaje[] {
        return [...this._personajes]; //... (operador spread)=> separa todos los elemtnos que hay dentro del array y apartir de eso que un nuevo array
      }

    constructor(){
    }

    agregarPersonaje(personajeData:Personaje){
        this._personajes.push(personajeData);
    }

}