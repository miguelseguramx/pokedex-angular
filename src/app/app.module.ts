import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { StatComponent } from './stat/stat.component';
import { PokedexScreenComponent } from './pokedex-screen/pokedex-screen.component';
import { PokedexFormComponent } from './pokedex-form/pokedex-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokedexScreenComponent,
    StatComponent,
    PokedexFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
