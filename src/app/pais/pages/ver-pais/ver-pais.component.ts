import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private urlActive: ActivatedRoute,
    private paisService: PaisService,
    ) { }//ActivatedRoute para poder observar el url

  ngOnInit(): void {
    this.urlActive.params
      .pipe(switchMap( ({countryId}) => this.paisService.getPais(countryId)),
            tap (console.log)
      )

      .subscribe(pais => this.pais = pais);


    // this.urlActive.params
    //   .subscribe( ({countryId}) => {
    //     this.paisService.getPais(countryId).subscribe(
    //       pais => {
    //         console.log(pais);
    //     });
    //   });
  }

}
