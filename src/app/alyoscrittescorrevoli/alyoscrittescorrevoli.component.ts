import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'alyo-scrittescorrevoli',
  templateUrl: './alyoscrittescorrevoli.component.html',
  styleUrls: ['./alyoscrittescorrevoli.component.css']
})
export class AlyoScritteScorrevoliComponent implements OnInit {

  ultimo_elemento = 0;
  lista_posizioni = ["-50%","50%","150%"]
  lista_nome_profilo = ["คlץ๏ Ŧ๏ภtร","凡乚ㄚロ 下ロ几イら","ⒶⓁⓎⓄ ⒻⓄⓃⓉⓈ","ΔLΨΘ FΘ∏ƬЅ","ᗩլ¥Θ ƑΘÑᖶŠ","ᗩᒪYO ᖴOᑎTS","𝔸𝕃𝕐𝕆 𝔽𝕆ℕ𝕋𝕊", "🅐🅛🅨🅞 🅕🅞🅝🅣🅢","🄰🄻🅈🄾 🄵🄾🄽🅃🅂","ALƔƆ ƑƆŊTS"]


  prova = "alyo-padding-10px alyo-sfocato-bianco-80 alyo-bordo-rotondo-10px alyo-ombra alyo-testo-centro";

  @Input('classe') classe: any;
  @Input() ngclasse: any = null;
  @Input('stile') stile: any;
  @Input('lista_scritte') lista_scritte: any;
  @Input('velocita') velocita: any;
  @Input() classealyocolori: any = null;
  @Input() listacolori: any = null;
  @Output('esterno') esterno = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

    var html = "";



    var cont = 0;
    for(var i=0; i<3; i++){

      if(cont > this.lista_scritte.length-1){ cont = 0; }

      html = html +"<h1 class='alyo-h1 "+this.classe.titolo+" "+this.ngclasse['titolo']+"' style='position: absolute; top: 50%; left: "+this.lista_posizioni[i]+"; transform: translate(-50%, -50%); white-space: nowrap;'>"+this.lista_scritte[cont]+"</h1>";


      this.ultimo_elemento = cont;
      cont++;
    }


    $("#alyo-scrittescorrevoli").html(html);

    setInterval(()=>{

      this.ultimo_elemento++;

      if(this.ultimo_elemento > this.lista_scritte.length-1){
         this.ultimo_elemento = 0;
      }

      $("#alyo-scrittescorrevoli").append("<h1 class='alyo-h1 "+this.classe.titolo+"  "+this.ngclasse['titolo']+"' style='position: absolute; top: 50%; left: 250%; transform: translate(-50%, -50%);  white-space: nowrap;'>"+this.lista_scritte[this.ultimo_elemento]+"</h1>");

      $(".alyo-h1:eq(0)").animate({left: '-=100%'},"linear");
      $(".alyo-h1:eq(1)").animate({left: '-=100%'},"linear");
      $(".alyo-h1:eq(2)").animate({left: '-=100%'},"linear");
      $(".alyo-h1:eq(3)").animate({left: '-=100%'},"linear");

      setTimeout(() => {
        $(".alyo-h1:eq(0)").remove();
      }, 1000);

    },this.velocita);

    this.esterno.emit(this);

  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
