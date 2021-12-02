import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanierComponent } from './panier/panier.component';
import { CategorieComponent } from './categorie/categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    PanierComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
