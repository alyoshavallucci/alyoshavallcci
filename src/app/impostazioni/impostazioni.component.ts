import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alyo-impostazioni',
  templateUrl: './impostazioni.component.html',
  styleUrls: ['./impostazioni.component.css']
})
export class ImpostazioniComponent implements OnInit {

  @Input('classealyocolori') cac: any = null;
  @Input('classealyofonts') caf: any = null;

  bottonemodalitascura: any = null;

  grafica = {
    switch: {
      contenitore: "",
      indicatore: "alyo-bianco-trasparente-50"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  aggiornamento(){
    this.cac.dodalita_selezionata = true
    this.cac.modalitachiara = !this.bottonemodalitascura.attivo
    this.caf.aggiornaLayout()
  }

}
