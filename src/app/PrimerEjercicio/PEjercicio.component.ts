import { Component, OnInit } from "@angular/core";

@Component ({
    selector: "app-PrimerEjercicio",
    templateUrl: '../PrimerEjercicio/PEjercicio.component.html',
    styleUrls: ['../PrimerEjercicio/PEjercicio.component.css']

})
export class PrimerEjercicioComponent implements OnInit {
    ngOnInit(): void{};
    // valores:number[] = [2];
    // valores = new Array(6); 
    
    //Creo una variable de tipo cualquiera:
    num: any;
    //Después creo una función llam. generar para añadir todo en number:
    generar(){
        this.num = this.generarArray();
    }
    //En el constructor, llamo a la función generar:
    constructor() {
       this.generar();
    };
    //Al recorrer el for añado cada valor al array con la función push(). Devuelve el array:
    generarArray(){
        const array = [];
        for(let i=0; i < 100; i++) {
          array.push(i); 
        }
        return array;
      }
}