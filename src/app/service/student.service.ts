import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/student';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student> {

  //apiUrl: string = 'http://localhost:3000/students';
  list$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor(public http: HttpClient) {
    super(http, 'student');
   }

  /*
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

  get(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  remove(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${this.apiUrl}/${student.id}`);
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}`, student);
  }

  update(student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.apiUrl}/${student.id}`, student);
  }
  */
}
