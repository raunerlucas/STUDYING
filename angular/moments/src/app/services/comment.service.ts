import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment } from '../Comment';
import { Response } from '../Response';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(
    private httpClient: HttpClient
  ) { }

  createComment(comment: Comment): Observable<Response<Comment>>{
    const url = `${this.apiUrl}/${comment.momentId}/comments`;
    return this.httpClient.post<Response<Comment>>(url, comment)
  }

}
