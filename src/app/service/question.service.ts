import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '../model/question';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService<Question> {

  //apiUrl: string = 'http://localhost:3000/questions';
  list$: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  constructor(public http: HttpClient) {
    super(http, 'questions');
  }

  /*
  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.apiUrl}/${id}`);
  }

  remove(question: Question): Observable<Question> {
    return this.http.delete<Question>(`${this.apiUrl}/${question.id}`);
  }

  create(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}`, question);
  }

  update(question: Question): Observable<Question> {
    return this.http.patch<Question>(`${this.apiUrl}/${question.id}`, question);
  }
  */
}
