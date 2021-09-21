import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: 'YAIzaSyBhKwKfdkfgZSeZvQcZNBVYu2mEfgonbzA'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
