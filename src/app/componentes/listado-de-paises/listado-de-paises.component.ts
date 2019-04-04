import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
  selector: 'app-listado-de-paises',
  templateUrl: './listado-de-paises.component.html',
  styleUrls: ['./listado-de-paises.component.css']
})
export class ListadoDePaisesComponent implements OnInit {
  public listadoDePaises: Array<any>;
  miServicioDePaises:PaisesService;
  constructor( servicioPaises:PaisesService) {
    this.miServicioDePaises=servicioPaises;
   }

  ngOnInit() {
    this.miServicioDePaises.listar()
    .then(datos=>{
      console.info("listado de paises",datos);
      this.listadoDePaises=datos;
    });
  }

}
