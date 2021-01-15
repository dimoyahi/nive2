import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GeneralComponent } from './general/general.component';
import { VentasComponent } from './ventas/ventas.component';
import { CarteraComponent } from './cartera/cartera.component';
import { LogisticaComponent } from './logistica/logistica.component';
import { CadenasComponent } from './cadenas/cadenas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GeneralComponent,
    VentasComponent,
    CarteraComponent,
    LogisticaComponent,
    CadenasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
