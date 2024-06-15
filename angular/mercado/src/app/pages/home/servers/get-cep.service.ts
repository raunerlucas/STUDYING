import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetCepService {

  constructor(
    private http: HttpClient
  ) {}

  cep(cep: String) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
