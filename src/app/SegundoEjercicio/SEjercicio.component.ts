import { Component, OnInit } from "@angular/core";
import { Observable, observable } from "rxjs";
import { of } from "rxjs/internal/observable/of";

@Component ({
    selector: "app-SegundoEjercicio",
    templateUrl: '../SegundoEjercicio/SEjercicio.component.html',
    styleUrls: ['../SegundoEjercicio/SEjercicio.component.css']

})
export class SegundoEjercicioComponent implements OnInit {
    ngOnInit(): void{};

    //Reutilizo el código anterior:
    num: any;
    generar(){
        this.num = this.generarArray();
    }
    constructor() {
       this.generar();
    };
    generarArray(){
        const array = [];
        for(let i=0; i < 100; i++) {
          array.push(i); 
          console.log("llega");
        }
        //Al pedir que no lo haga con el if lo primero que me vino a la mente fue
        //la función filter() de JS:
        var filtro = array.filter(function(i){return i %2 == 0;})

        //Creo una variable que paso a través del operador of 
        let obser=of(filtro);
        //Lo subscribo:
        obser.subscribe(
            (val: any)=> console.log(val),
            ()=> console.log("error"),
            () => console.log("complete"))
        return array;         

    }
}