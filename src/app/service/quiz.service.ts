import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../model/quiz';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseService<Quiz> {

  //apiUrl: string = 'http://localhost:3000/quizzes';
  list$: BehaviorSubject<Quiz[]> = new BehaviorSubject<Quiz[]>([]);

  constructor(public http: HttpClient) {
    super(http, 'quizzes');
   }

  /*
  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${id}`);
  }

  remove(quiz: Quiz): Observable<Quiz> {
    return this.http.delete<Quiz>(`${this.apiUrl}/${quiz.id}`);
  }

  create(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(`${this.apiUrl}`, quiz);
  }

  update(quiz: Quiz): Observable<Quiz> {
    return this.http.patch<Quiz>(`${this.apiUrl}/${quiz.id}`, quiz);
  }
  */
}
