import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'alyo-cmscorrevoli',
  templateUrl: './alyocmscorrevoli.component.html',
  styleUrls: ['./alyocmscorrevoli.component.css']
})
export class AlyoCmScorrevoliComponent implements OnInit {

  @Input('classe') classe: any;
  @Input('stile') stile: any;
  @Input('lista_multimediale') lista_multimediale: any;
  @Input('velocita') velocita: any;

  @Output('classe') ritornaclasse = new EventEmitter();

  primo_elemento = 0;
  lista_posizioni = ["-50%","50%","150%","250%","350%"];

  stile_interno = "width: 100%; height: 100%;"

  //
  constructor() { }

  ngOnInit(): void {this.ritornaclasse.emit(this);}

  caricamento(lista_multimediale: any){

    var html = "";

    var cont = 0;
    this.primo_elemento = 0;
    for(var i=0; i<lista_multimediale.length; i++){

      if(lista_multimediale[i] == '')
      { html = html +"<div class='alyo-multimediale' style='"+this.stile["multimediale"]+" position: absolute; width: 100%; padding: 10px; top: 50%; left: "+this.lista_posizioni[i]+"; transform: translate(-50%, -50%);'><div style='"+this.stile_interno+" cover; position: relative; ' class='"+this.classe.multimediale+"'><img src='https://www.aljoschavallucci.it/s8bosco/assets/icone/image.png' style='position: absolute; height: 100%; top: 0px; left: 0px; transform: translate(50%, 0);' ></img></div></div>";}

      if(lista_multimediale[i] != '' && this.tipoContenuto(lista_multimediale[i]) == 1)
      { html = html +"<div class='alyo-multimediale' style='"+this.stile["multimediale"]+" position: absolute; width: 100%; padding: 10px; top: 50%; left: "+this.lista_posizioni[i]+"; transform: translate(-50%, -50%);'><img src='"+lista_multimediale[i]+"' style='"+this.stile_interno+" object-fit: cover;' class='"+this.classe.multimediale+"' ></img></div>";}

      if(lista_multimediale[i] != '' && this.tipoContenuto(lista_multimediale[i]) == 0){
        html = html +"<div class='alyo-multimediale' style='"+this.stile["multimediale"]+" position: absolute; width: 100%; padding: 10px; top: 50%; left: "+this.lista_posizioni[i]+"; transform: translate(-50%, -50%);'><iframe src='"+lista_multimediale[i]+"' style='"+this.stile_interno+"' class='"+this.classe.multimediale+"' ></iframe></div>";
      }
 
      cont++;
    }

    $("#alyo-contenutimultimedialiscorrevoli").html(html);

    setInterval(()=>{

      if(this.primo_elemento > lista_multimediale.length-1){
         this.primo_elemento = 0;
      }

      for(var i=0; i<lista_multimediale.length; i++){
        $(".alyo-multimediale:eq("+i+")").animate({left: '-=100%'},"linear");  
      }
    
      setTimeout(() => {$(".alyo-multimediale:eq("+this.primo_elemento+")").css({"left": "350%"}); this.primo_elemento++;}, 1000); 
    
    },this.velocita);

  }

  getFileExtension(filename: string){
    var ext = /^.+\.([^.]+)$/.exec(filename);
    return ext == null ? "" : ext[1];
  }

  tipoContenuto(url: string){
      var fileExt = this.getFileExtension(url);

      if(fileExt!="" && fileExt!="jpg" && fileExt!="gif" && fileExt!="png" && fileExt!="jpeg")  { return 0 }
      else return 1
  }

  // sanitize(url: string){
  //   return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  //  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
