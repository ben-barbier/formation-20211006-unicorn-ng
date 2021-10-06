import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private readonly _http: HttpClient) {}

  public getAll(): Observable<Unicorn[]> {
    return this._http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }
}
