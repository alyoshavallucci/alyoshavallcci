import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alyo-colori',
  templateUrl: './alyocolori.component.html',
  styleUrls: ['./alyocolori.component.css']
})
export class AlyoColoriComponent implements OnInit {

  @Input() velocita: any;
  @Input() colori: any = null;
  @Output('esterno') esterno = new EventEmitter()

  modalitachiara = true
  dodalita_selezionata = false;
  coloreselezionato = 0;

  constructor(){}

  ngOnInit(): void {
    this.modalitaChiara()
    this.esterno.emit(this);

    setInterval(()=>{
      this.modalitaChiara();
      this.coloreselezionato++;

      if(this.coloreselezionato>50){
         this.coloreselezionato = 0
      }

      this.esterno.emit(this);
    },this.velocita);
  }

  colorefisso(tipo: string,numero: number){
      return this.colori["fisso"][tipo][''+this.modalitachiara+''][numero]
  }

  colorevariabile(tipo: string){
      return this.colori["variabile"][tipo][''+this.modalitachiara+''][this.coloreselezionato%this.colori["variabile"][tipo][''+this.modalitachiara+''].length]
  }

  modalitaChiara() {

    if(!this.dodalita_selezionata) {
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){this.modalitachiara = false;}
      else{this.modalitachiara = true;}
    }

  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
