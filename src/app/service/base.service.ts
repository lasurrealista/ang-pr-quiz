import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number }> {

  entityName: string = '';
  apiUrl: string = 'http://localhost:3000';
  list$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);

  constructor(
    public http: HttpClient,
    @Inject('entityName') entityName: string,
  ) {
    this.entityName = entityName;
  }

  getAll(): void {
    this.http.get<T[]>(`${this.apiUrl}/${this.entityName}`)
      .subscribe(
        list => this.list$.next(list)
      )
  }

  get(id: number): Observable<T> {
    id = parseInt(('' + id), 10);
    return this.http.get<T>(`${this.apiUrl}/${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}/${this.entityName}`,
      entity
    ).pipe(
      tap(
        () => this.getAll()
      )
    )
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${this.entityName}/${entity.id}`,
      entity);
  }

  remove(entity: T): Observable<T> {
    return this.http.delete<T>(
      `${this.apiUrl}/${this.entityName}/${entity.id}`,
    );
  }
}
