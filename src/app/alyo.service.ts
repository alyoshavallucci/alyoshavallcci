import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class AlyoService {


  perorso = "/api/php/"
  percorsi = [this.perorso+"caricamento.php",
              this.perorso+"inserimento.php",
              this.perorso+"modifica.php",
              this.perorso+"cancellazione.php",
              this.perorso+"cerca.php"
             ];

  constructor(private http: HttpClient){}

  ngOnInit(): void {}

  alyo_caricamento(dati:  any):   Observable<any> { return this.alyo_post(this.percorsi[0],dati); }
  alyo_inserimento(dati: any):    Observable<any> { return this.alyo_post(this.percorsi[1],dati); }
  alyo_modifica(dati: any):       Observable<any> { return this.alyo_post(this.percorsi[2],dati); }
  alyo_cancellazione(dati: any):  Observable<any> { return this.alyo_post(this.percorsi[3],dati); }
  alyo_cerca(dati: any):          Observable<any> { return this.alyo_post(this.percorsi[4],dati); }

  alyo_post(url: string, dati:  FormData): Observable<any> { return this.http.post(url,dati); }
}

