import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'alyo-iconanomesito',
  templateUrl: './alyoiconanomesito.component.html',
  styleUrls: ['./alyoiconanomesito.component.css']
})
export class AlyoIconaNomeSitoComponent implements OnInit {

  @Input('lista_loghi') lista_loghi: any = null;
  @Input('testofonts') testofonts: any = null;
  @Input('valocita') velocita: any;
  @Input('tipo') tipo: string = "nomelogo";

  @Output('classe') classe = new EventEmitter();

  cont_loghi = 0
  cont_nomi_sito = 0;

  logo_corrente = ""
  nome_corrente = ""
  classefonts: any = null;

  constructor() {}

  ngOnInit(): void {

    if(this.tipo == "testo")   { this.funzione1(); }
    if(this.tipo == "nomelogo"){ this.funzione2(); }

    this.classe.emit(this);
  }

  funzione1(){

    if(this.lista_loghi != null ){ this.logo_corrente = this.lista_loghi[0] }
    if(this.testofonts != null){
        setTimeout(() => { this.nome_corrente = this.classefonts.testofontrandom(); },200);
    }
 
    setInterval(() => {

      if(this.lista_loghi!= null ){ this.logo_corrente = this.lista_loghi[0] }
      if(this.testofonts != null){
          setTimeout(() => {
            this.nome_corrente = this.classefonts.testofontrandom(); 
          },200);
      }
  
      this.cont_loghi++;
      if(this.lista_loghi != null && this.cont_loghi > this.lista_loghi.length-1){ this.cont_loghi = 0; }
  
      if(this.lista_loghi != null ){ this.logo_corrente = this.lista_loghi[this.cont_loghi]  }
      if(this.testofonts  != null ){ this.nome_corrente = this.classefonts.testofontrandom() }      
      
    },this.velocita);
  }

  funzione2(){

    if(this.lista_loghi != null){ $("#alyo_logi_sitoweb").attr("href", this.lista_loghi[0]); }

    if(this.testofonts != null){
      setTimeout(() => { $("#alyo_nomi_sitoweb").html(this.classefonts.testofontrandom()); },200);
    }

    setInterval(() => {

      this.cont_loghi++;
      if(this.lista_loghi != null && this.cont_loghi > this.lista_loghi.length-1){ this.cont_loghi = 0;    }

      if(this.lista_loghi != null){ $("#alyo_logi_sitoweb").attr("href", this.lista_loghi[this.cont_loghi]); }
      if(this.testofonts  != null){ $("#alyo_nomi_sitoweb").html(this.classefonts.testofontrandom()); }

    },this.velocita);
  }

  s(intestazione: any, testo: any){
      console.log();
      console.log(intestazione);
      console.log(testo);
      console.log();
  }

}
