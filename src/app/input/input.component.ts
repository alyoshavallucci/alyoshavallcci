import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faCircleXmark, faEyeSlash, faEye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AlyoService} from '../alyo.service';

/*
  TESTO
  EMAIL
  PASSWORD
*/
@Component({
  selector: 'alyo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

// --------------- INPUT ---------------

  @Input() tipo: any;
  @Input() valore: any = null;
  @Input() classe: any;
  @Input() stile: any;
  @Input() item: any = null;
  @Input() placeholder: any;
  @Input() indice: any;
  @Input() bottone_cancella: boolean = true;
  @Input() modifica: any = null;

// --------------- OUTPUT ---------------
  @Output('onKeyValore') onKeyValore = new EventEmitter();

  visibilita = false;
  tipo_input = "";
  cornice: boolean = false;
  lista_validazione: any = [{}];
  panello_validazione: boolean = false;
  alyoFonts: any = null;

  faCircleXmark = faCircleXmark;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  faCircleCheck = faCircleCheck;

  constructor(private service: AlyoService) { }

  ngOnInit(): void {

    this.tipo_input = this.tipo;

    if(this.tipo == "password"){
      this.lista_validazione = [{nome: "Almeno Una lettera Minuscola", validazione: false},
                                {nome: "Almeno Una lettera Maiuscola", validazione: false},
                                {nome: "Almeno Una Numero",            validazione: false},
                                {nome: "Almeno 8 Caratteri",           validazione: false},
                                {nome: "Almeno Un Carattere Speciale", validazione: false}
                               ]
    }

    if(this.tipo == "email"){
      this.lista_validazione = [{nome: "Il Carattere @",              validazione: false},
                                {nome: "Inserire .com .it .org ....", validazione: false},
                               ]
    }
  }

  apriChiudiPanello(){

    if(this.valore  != null && this.valore.length > 0){ this.panello_validazione = true}
    else { this.panello_validazione = false }

    if(this.item.valore  != null && this.item.valore.length > 0){ this.panello_validazione = true}
    else { this.panello_validazione = false }
  }

  tipo_valore(testo: any){
    if(this.valore == null){ this.item.valore = testo }
    else { this.valore = testo}
  }

  validazione(testo: any){

    if(this.tipo == "text"){
      this.tipo_valore(testo);
    }

    if(this.tipo == "fonts"){
       this.valore = this.alyoFonts.convertiTestoInput(testo);
       this.alyoFonts.aggiornaLista(testo);
    }

    if(this.tipo == "email"){
        this.cornice = false;

        var numbers = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (testo.match(numbers)) { this.cornice = false;  }
        else {this.cornice = true;}

        var numbers = /@/g;
        if (testo.match(numbers)) {this.lista_validazione[0].validazione = true;
        } else { this.lista_validazione[0].validazione = false; }

        var numbers = /((\.(\w){2,3})+)/;
        if (testo.match(numbers)) {this.lista_validazione[1].validazione = true;
        } else { this.lista_validazione[1].validazione = false; }

        setTimeout(() => {this.panello_validazione = false;}, 3000);

        this.tipo_valore(testo);
    }

    if(this.tipo == "password"){
        this.cornice = false;

        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (testo.match(lowerCaseLetters)) {
            this.cornice = false;
            this.lista_validazione[0].validazione = true;

        } else {
            this.cornice = true;
            this.lista_validazione[0].validazione = false;

        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (testo.match(upperCaseLetters)) {
            this.cornice = false;
            this.lista_validazione[1].validazione = true;

        } else {
            this.cornice = true;
            this.lista_validazione[1].validazione = false;

        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (testo.match(numbers)) {
            this.cornice = false;
            this.lista_validazione[2].validazione = true;

        } else {
            this.cornice = true;
            this.lista_validazione[2].validazione = false;

        }

        // Validate length
        if (testo.length >= 8) {
            this.cornice = false;
            this.lista_validazione[3].validazione = true;

        } else {
            this.cornice = true;
            this.lista_validazione[3].validazione = false;

        }

        // Validate Carattere Speciale
        var numbers = /[\$\@\#\!\?\*\+\.\&\%\(\)\_\:\,\;\/\|\=\-\']+/i;
        if (testo.match(numbers)) {
            this.cornice = false;
            this.lista_validazione[4].validazione = true;

        } else {
            this.cornice = true;
            this.lista_validazione[4].validazione = false;

        }
        setTimeout(() => {this.panello_validazione = false;}, 3000);
        this.tipo_valore(testo);
    }

    if(this.modifica != null){
      this.modifica_server()
    }

    this.apriChiudiPanello();
    this.onkey2()

   }

  focusout(){ if(this.tipo == "fonts"){ this.panello_validazione = false;} }

  onkey2(){ this.onKeyValore.emit(this); }

  onkey(input: any){
    return input.target.value;
  }

  esterno(elemento: any){
    this.alyoFonts = elemento;
  }

  modifica_server(){
    var formdate = new FormData();
    formdate.append("tabella",  this.modifica[0]);
    formdate.append("id",       this.modifica[1]);
    formdate.append("attributo",this.modifica[2]);
    formdate.append("valore",   this.item.valore);

    this.service.alyo_modifica(formdate).subscribe(dati_c => {
      this.s("DATI: { ",dati_c.messaggio+" } { "+dati_c.response+" }")
    });
  }

  s(testo: string,valore: any){
    console.log("");
    console.log(testo);
    console.log(valore);
    console.log("");
  }
}
