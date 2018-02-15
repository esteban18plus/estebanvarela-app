import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrincipalService } from './service/principal.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: 
  [
    PrincipalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
