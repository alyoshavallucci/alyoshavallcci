import { Component, Input, OnInit } from '@angular/core';
import { faUser, faCalendar, faCity, faUserGroup, faEnvelope, faPhone, faMobile, faHouseChimney, faMapPin, faFlag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'alyo-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  @Input('classealyocolori') cac: any = null;

  icone: any = {utente: faUser, calendario: faCalendar, citta: faCity,persone: faUserGroup, email: faEnvelope, telefono: faPhone, cellulare: faMobile, casa: faHouseChimney, posizione: faMapPin, bandiera: faFlag}

  constructor() { }

  ngOnInit(): void {
  }

}
