import { Component, } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{ cursor:pointer;}
  `
  ]
})
export class PorPaisComponent   {

  name:string = ""
  error:boolean = false;
  paises : Country[] = [];
  paisesSuge : Country[] = [];
  constructor(private paisService: PaisService) { }
  buscar( name:string){
    this.error = false;
    this.name = name;
    
    this.paisService.buscarPaises(this.name)
      .subscribe({ 
        next:(resPaises:Country[]) => {
          this.paises = resPaises;
        },

        error: (err:Error) => { 
          this.error = true;
          this.paises = [];
        }
      })
  }
  
  suge( termino: string){
    this.error = false;
    this.paisService.buscarPaises(termino)
      .subscribe({ 
        next:(resPaises:Country[]) => {
          this.paisesSuge = resPaises.splice(0,5);
        },
        error: (err:Error) => { 
          this.paisesSuge = [];
        }
      })
  }

}
