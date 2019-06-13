import { Component } from '@angular/core';
import { MapaService } from './services/mapa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat = 51.678418;
  lng = 7.809007;
  markers = [];
  constructor(private mapaService: MapaService) {
    this.mapaService.getMarkers().subscribe((data: any) => {
      this.markers = data.markers.map((data: any) => { 
        return { name: data.name, LngLat : [data.lng, data.lat]}
      });
    })
  }

  buscar(name: string) {
    this.mapaService.getMarkers(name).subscribe((data: any) => {
      if (data.ok) { 
        this.markers = data.markers.map((data: any) => { 
          return { name: data.name, LngLat : [data.lng, data.lat]}
        });
      }
    },(err)=>{
      if(err) {
        console.log(err.error.err);
      }
    })
  }
}
