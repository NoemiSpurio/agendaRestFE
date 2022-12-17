import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit {
  agendaList?: Agenda[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private agendaService: AgendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.agendaService.getAgende().subscribe(agendaListItem => this.agendaList = agendaListItem);

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
