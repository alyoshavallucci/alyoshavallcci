import { Component } from '@angular/core';
import { faClone, faBookBookmark, faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { range } from 'rxjs';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { DomSanitizer } from '@angular/platform-browser';
import { AlyoService } from './alyo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esercizi';
  faClone = faClone;
  faTree = faTree;
  numero_palline = 10;

  classe: any;

  classealyoscrittescorrevoli: any;
  caf = this;
  cac: any;

  lista_sitiweb: any = []

  lista_sezioni = [
                    {indice: 0, icona: faHome,         label: 'Web Site',     selezione: false,  link: ""},
                    {indice: 1, icona: faUser, label: 'Profilo',   selezione: true, link: ""},
                    {indice: 2, icona: faGear,         label: 'Impostazioni', selezione: false, link: ""}
                  ]

  lista_nome_profilo = ["👱🏻‍♂️ คlץ๏รђค vคllยςςเ","👱🏻‍♂️ ᗩլ¥ΘŠĦᗩ ᐺᗩլլᑗ©©Ї","👱🏻‍♂️ ⒶⓁⓎⓄⓈⒽⒶ <br>ⓋⒶⓁⓁⓊⒸⒸⒾ","👱🏻‍♂️ 𝔸𝕃𝕐𝕆𝕊ℍ𝔸 𝕍𝔸𝕃𝕃𝕌ℂℂ𝕀","👱🏻‍♂️ 𝙰𝙻𝚈𝙾𝚂𝙷𝙰 𝚅𝙰𝙻𝙻𝚄𝙲𝙲𝙸","👱🏻‍♂️ ꋬ꒒ꐞꉻꑄꃬꋬ ꒦ꋬ꒒꒒ꀎꏳꏳ꒐","👱🏻‍♂️ 🅰🅻🆈🅾🆂🅷🅰 <br>🆅🅰🅻🅻🆄🅲🅲🅸","👱🏻‍♂️ രԼഴഠട৸ര ౮രԼԼಲഭഭ౹","👱🏻‍♂️ 卂乚丫口丂卄卂 <br>リ卂乚乚凵匚匚工","👱🏻‍♂️ 🇦​🇱​🇾​🇴​🇸​🇭​🇦​ <br>🇻​🇦​🇱​🇱​🇺​🇨​🇨​🇮​"]
  nomeprofilo = "ALYOSHA VALLUCCI"
  lista_icone = ["../assets/icone/icona1.png","../assets/icone/icona2.png","../assets/icone/icona3.png","../assets/icone/icona4.png","../assets/icone/icona5.png","../assets/icone/icona6.png","../assets/icone/icona7.png","../assets/icone/icona8.png","../assets/icone/icona9.png","../assets/icone/icona10.png"]

  url: any = {icone: "../../assets/icone/"}

  colori: any = {
    fisso: {
        sfondocontenitore: {
            true:  ["alyo-sfocato-bianco-50","alyo-sfocato-bianco-30","alyo-bianco-trasparente-30","alyo-bianco-trasparente-50"],
            false: ["alyo-sfocato-5F5F5F-50","alyo-sfocato-5F5F5F-30","alyo-nero-trasparente-30","alyo-nero-trasparente-50"]
          },
        sfondobody: {
            true:  ['./../assets/sfondo/sfondo.gif'],
            false: ['./../assets/sfondo/sfondofluo.gif']
          },
        testo: {
            true:  ["alyo-testo-nero"],
            false: ["alyo-testo-bianco"]
          }
        },
    variabile:{
        testo: {
            true:  ["alyo-testo-rosso","alyo-testo-verde","alyo-testo-blu","alyo-testo-rosavivo","alyo-testo-giallo","alyo-testo-viola","alyo-testo-marrone","alyo-testo-arancione","alyo-testo-turchese","alyo-testo-orchidea"],
            false: ["alyo-testo-giallofluo","alyo-testo-rosafluo","alyo-testo-arancionefluo","alyo-testo-verdefluo","alyo-testo-azzurrofluo",]
          },
        sfondocontenitore: {
            true:  ["alyo-rosso","alyo-verde","alyo-blu","alyo-rosavivo","alyo-giallo","alyo-viola","alyo-marrone","alyo-arancione","alyo-turchese","alyo-orchidea"],
            false: ["alyo-giallofluo","alyo-rosafluo","alyo-arancionefluo","alyo-verdefluo","alyo-azzurrofluo",]
          },
        icone: {
          true: ["../assets/icone/icona1.png","../assets/icone/icona2.png","../assets/icone/icona3.png","../assets/icone/icona4.png","../assets/icone/icona5.png","../assets/icone/icona6.png","../assets/icone/icona7.png","../assets/icone/icona8.png","../assets/icone/icona9.png","../assets/icone/icona10.png"],
          false: ["../assets/icone/iconafluo1.png","../assets/icone/iconafluo2.png","../assets/icone/iconafluo3.png","../assets/icone/iconafluo4.png","../assets/icone/iconafluo5.png"]
        }
        }
    }

  constructor(private _sanitizer: DomSanitizer,private service: AlyoService) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      $('body').css('background-image', 'url(' + this.cac.colorefisso("sfondobody",0) + ')');
    },200);
  }

  // caricamento(attributo: string = "ORDER BY id ASC"): void {

  //   var formdate = new FormData();
  //   formdate.append("tabella","sitiweb");
  //   formdate.append("attributo",attributo);

  //   this.service.alyo_caricamento(formdate).subscribe(dati => {
  //     this.lista_sitiweb = []
  //     try {

  //       for(var item of dati){
  //         this.lista_sitiweb.push({id: item.id,url: item.url})
  //       }
  //     }
  //     catch(err) {this.s("ERRORE: ","tabella CONTENUTISCORREVOLI vuote")}
  //     //this.s("CONTENUTISCORREVOLI: ",this.lista_sitiweb)
  //     this.classe.caricamento(this.lista_sitiweb)
  //   });
  // }

  aggiornaLayout(){
    $('body').css('background-image', 'url(' + this.cac.colorefisso("sfondobody",0) + ')');
  }

  aggiornaBottoni(indice: number){
    for(var i=0; i<this.lista_sezioni.length; i++)
       { this.lista_sezioni[i].selezione = false; }
    this.lista_sezioni[indice].selezione= true;
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
