import { Component } from '@angular/core';
import { Moment } from 'src/app/Moments';

import { Router } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  btnText = 'New Moment';

  constructor(
      private momentService: MomentService,
      private messageService: MessagesService,
      private router: Router) {}


  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }
    // Tod's

    // Enviar para o service
    await this.momentService.createMoment(formData).subscribe();

    // Exibir Msg
    this.messageService.add("Momento adicionado com sucesso!");

    // redirect
    this.router.navigate(['/']);
  }
}
