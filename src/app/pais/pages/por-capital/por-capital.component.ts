import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  name:string = ""
  error:boolean = false;
  paises : Country[] = [];
  
  constructor(private paisService: PaisService) { }
  ngOnInit(): void {}

  buscar( name:string){
    this.error = false;
    this.name = name;
    
    this.paisService.buscarCapital(this.name)
      .subscribe({ 
        next:(resPaises:Country[]) => {
          console.log(resPaises);
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
    this.name = termino;
  }

}
