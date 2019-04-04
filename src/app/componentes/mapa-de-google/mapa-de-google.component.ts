import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-de-google',
  templateUrl: './mapa-de-google.component.html',
  styleUrls: ['./mapa-de-google.component.css']
})
export class MapaDeGoogleComponent implements OnInit {
  title: string = 'El Primer mapa';
  lat: number = 33.678418;
  lng: number = 5.809007;
   // google maps zoom level
   zoom: number = 8;
   



  constructor() { }
  
  ngOnInit() {
  }


  


  

}

