import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 40.4146500;
  lng: number = -3.7004000;

  constructor() {
    
   }

  ngOnInit() {
    this.getUserLocation()
  }

  private getUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
     })
    }
  }
}
