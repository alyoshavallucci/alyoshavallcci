import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alyo-bottoneswitch',
  templateUrl: './alyobottoneswitch.component.html',
  styleUrls: ['./alyobottoneswitch.component.css']
})
export class AlyobottoneswitchComponent implements OnInit {

  @Input() attivo: boolean = false;
  @Input() classe: any;
  @Input() sfondo: any;
  @Output('esterno') esterno = new EventEmitter()
  @Output('evento') evento = new EventEmitter()

  colorebottone = "alyo-bianco-trasparente-50"

  constructor() { }

  ngOnInit(): void {

    if(this.attivo){ $("#alyo-indicatore-switch").css({'position': 'absolute','right': '5px'}); this.colorebottone = this.sfondo['true'] }
    else {           $("#alyo-indicatore-switch").css({'position': 'absolute','left':  '5px'}); this.colorebottone = this.sfondo['false'] }

    this.esterno.emit(this);
  }

  aggiornabottone(){ this.click()}

  click(){

    this.attivo = !this.attivo;

    if(this.attivo){
      $("#alyo-indicatore-switch").animate({'position': 'absolute','left': '30px'});
      this.colorebottone =  this.sfondo['true']
    }
    else {
      $("#alyo-indicatore-switch").animate({'position': 'absolute','left': '5px'});
      this.colorebottone =  this.sfondo['false']
    }

    this.evento.emit(this);
  }

  s(testo: string,valore: any){
    console.log("");
    console.log(testo);
    console.log(valore);
    console.log("");
  }

}
