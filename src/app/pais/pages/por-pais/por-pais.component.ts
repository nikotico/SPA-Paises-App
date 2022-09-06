import { Component, } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent   {

  name:string = ""
  error:boolean = false;
  constructor(private paisService: PaisService) { }
  buscar(){
    this.error = false;
    this.paisService.buscarPais(this.name)
      .subscribe({ 
        next:(resp:Country[]) => {
          console.log(resp);
        },

        error: (err:Error) => { this.error = true;}
      })
  }
  

}
