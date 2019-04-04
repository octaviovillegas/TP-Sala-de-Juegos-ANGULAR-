import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

@Injectable()
export class ArchivosJugadoresService {

  api="http://localhost:8080/jugadoresarchivo/apirestjugadores/";
  peticion:any;
  constructor( public miHttp: MiHttpService ) {
    
  }


  public   traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.api+ruta)
    .toPromise()
    .then( data => {
      console.log("Archivo jugadores");
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
 

  
  }



}
