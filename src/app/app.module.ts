import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlyoService } from './alyo.service';
import { AlyoScritteScorrevoliComponent } from './alyoscrittescorrevoli/alyoscrittescorrevoli.component'
import { AlyoInputComponent } from './alyoinput/alyoinput.component';
import { AlyofontsComponent } from './alyofonts/alyofonts.component';
import { AlyoCmScorrevoliComponent } from './alyocmscorrevoli/alyocmscorrevoli.component'
import { AlyoIconaNomeSitoComponent } from './alyoiconanomesito/alyoiconanomesito.component';
import { ImpostazioniComponent } from './impostazioni/impostazioni.component'
import { AlyoColoriComponent } from './alyocolori/alyocolori.component'
import { AlyobottoneswitchComponent } from './alyobottoneswitch/alyobottoneswitch.component';
import { CurriculumComponent } from './curriculum/curriculum.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImpostazioniComponent,
    AlyoScritteScorrevoliComponent,
    AlyoInputComponent,
    AlyofontsComponent,
    AlyoCmScorrevoliComponent,
    AlyoIconaNomeSitoComponent,
    AlyoColoriComponent,
    AlyobottoneswitchComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlyoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
