import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './heroe.component.html',
    styleUrl: './heroe.component.css'
})

export class HeroeComponent {

    nombre:string = 'IronMan';
    edad:number=45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad} años`;
    }

    cambiarNombre():void {
        this.nombre = 'SpaiderMan';
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}