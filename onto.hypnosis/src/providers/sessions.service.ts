import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {Session} from '../models/session.model';

@Injectable()
export class SessionService {

  constructor(private http: Http) {}

  getAll(): Observable<Session[]> {
    return this.http
      .get('assets/data/sessions.json')
      .delay(2000)
      .map((res: Response) => res.json());
  }

  get(id): Observable<Session> {
    return this.http
      .get('assets/data/sessions.json')
      .map((res: Response) => res.json())
      .map((sessions: Session[]) => {
        for (let session of sessions) {
          if (session.id === id) {
            return session;
          }
        }
      });
  }
}
