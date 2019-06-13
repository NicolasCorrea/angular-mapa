import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// http
import {HttpClientModule} from '@angular/common/http';
// Componentes
import { AppComponent } from './app.component';

// import { AgmCoreModule } from '@agm/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'API_KEY'
    // })
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibmNvcnJlYSIsImEiOiJjand0OThrZ3EwMTNzNDlsODdzM2Q0NndrIn0.RLg29i2RhDVbT_gC6EKq8g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
