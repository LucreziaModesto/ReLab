import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  position : any;
  label :string;
  labelCasa: string;
  positionCasa: { lat: number; lng: number; };
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "Scuola";
    this.positionCasa = {lat: 45.5167748, lng: 9.186451};
    this.labelCasa = "Casa";
  }

}