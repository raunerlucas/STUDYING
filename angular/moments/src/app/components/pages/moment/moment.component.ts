import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { environment } from 'src/environments/environment';

import { Moment } from 'src/app/Moments';

import { Router, ActivatedRoute } from '@angular/router';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTime = faTimes;
  faEdit = faEdit;

  constructor(
    public momentService: MomentService,
    private router: ActivatedRoute,
    private route: Router,
    private mesnageService: MessagesService){

  }

  ngOnInit(): void {
    //id que esta na url
    const id = Number(this.router.snapshot.paramMap.get('id'));  
    
    this.momentService
      .getMoment(id)
      .subscribe((item) => this.moment = item.data);
  }

  async removeHandler(momentID: number){
    await this.momentService.removeMoment(momentID).subscribe()

    this.mesnageService.add("Momento excluído com sucesso!")

    this.route.navigate(['/']);
  }
}
