import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import * as $ from 'jquery';
import { faClone, faCircleXmark, faPlus, faSliders, faTrashCan, faMinusCircle, faVideo, faCalendar, faUserGroup, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import "@ptkdev/webcomponent-instagram-widget";
import { DomSanitizer } from '@angular/platform-browser';
import { AlyoService } from '../alyo.service';

// <!--versione 3.1-->

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('classealyocolori') cac: any = null;

  lista_sitiweb: any = []

  constructor(private _sanitizer: DomSanitizer,private service: AlyoService) {}

  ngOnInit(): void {this.caricamento("ORDER BY id DESC") }

  caricamento(attributo: string = "ORDER BY id ASC"): void {

    var formdate = new FormData();
    
    formdate.append("tabella","sitiweb");
    formdate.append("attributo",attributo);
    formdate.append("attributi","id,url,icona,nome");

    this.service.alyo_caricamento(formdate).subscribe(dati => {
      
      try {
        this.lista_sitiweb = []
        for(var item of dati){
          this.lista_sitiweb.push({id: item.id,url: {valore: item.url,sanitize: this.sanitize(item.url)},icona: this.split(item.icona), nome: item.nome, classe: null})
        }
      }
      catch(err) {this.s("ERRORE: ","tabella SITIWEB vuota")}
      //this.s("TABELLA SITI WEB: ",this.lista_sitiweb)
    });


  }

  split(testo: string){
    return testo.split(",");
  }


  sanitize(url: string){
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
