import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { environment } from 'src/environments/environment';

import { Moment } from 'src/app/Moments';

import { Router, ActivatedRoute } from '@angular/router';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from 'src/app/services/messages.service';

import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/Comment';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';


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

  commentForm!: FormGroup;

  constructor(
    public momentService: MomentService,
    private router: ActivatedRoute,
    private route: Router,
    private mesnageService: MessagesService,
    private commentService: CommentService ){

  }

  ngOnInit(): void {
    //id que esta na url
    const id = Number(this.router.snapshot.paramMap.get('id'));  
    
    this.momentService
      .getMoment(id)
      .subscribe((item) => this.moment = item.data);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    })
  }

  get text(){
    return this.commentForm.get('text')!;
  }

  get username(){
    return this.commentForm.get('username')!;
  }


  async removeHandler(momentID: number){
    await this.momentService.removeMoment(momentID).subscribe()

    this.mesnageService.add("Momento excluído com sucesso!")

    this.route.navigate(['/']);
  }

  async onSubmit(formGroupDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value

    data.momentId = Number(this.moment!.id)

    await this.commentService.createComment(data).subscribe(
      (comment) => this.moment!.comments!.push(comment.data));

    this.mesnageService.add("Comentario adicionado com sucesso!");

    this.commentForm.reset();

    formGroupDirective.resetForm();
  }


}
