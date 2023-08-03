import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moments';

import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent {
  moment?: Moment;

  constructor(public momentService: MomentService, private router: ActivatedRoute){

  }

  ngOnInit(): void {
    //id que esta na url
    const id = Number(this.router.snapshot.paramMap.get('id'));  
    
    this.momentService
      .getMoment(id)
      .subscribe((item) => this.moment = item.data);
  }
}
