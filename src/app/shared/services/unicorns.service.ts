import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, Observable } from 'rxjs';
import { concatAll, filter, map, mergeMap, toArray } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Capacity } from '../models/capacity.model';
import { Unicorn } from '../models/unicorn.model';
import { CapacitiesService } from './capacities.service';

@Injectable({
  providedIn: 'root',
})
export class UnicornsService {
  constructor(private readonly _http: HttpClient, private readonly capacitiesService: CapacitiesService) {}

  public getAll(): Observable<Unicorn[]> {
    return this._http.get<Unicorn[]>(`${environment.apiUrl}/unicorns`);
  }

  public get(id: number): Observable<Unicorn> {
    return this._http.get<Unicorn>(`${environment.apiUrl}/unicorns/${id}`);
  }

  public getMoreFiveYears(): Observable<Unicorn[]> {
    return this.getAll().pipe(
      concatAll(),
      map((unicorn) => ({ ...unicorn, weight: unicorn.weight + 5 })),
      filter((unicorn) => unicorn.birthyear < new Date().getFullYear() - 5),
      toArray()
    );
  }

  public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
    return this.getAll().pipe(
      concatAll(),
      mergeMap((unicorn) =>
        from(unicorn.capacities).pipe(
          mergeMap((capacityId) => this.capacitiesService.get(capacityId)),
          map((capacity) => capacity.label),
          toArray(),
          map((capacitiesLabels) => ({ ...unicorn, capacitiesLabels }))
        )
      ),
      toArray()
    );
  }

  public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
    return forkJoin([this.getAll(), this.capacitiesService.getAll()]).pipe(
      map(([unicorns, capacities]): Unicorn[] =>
        unicorns.map(
          (u: Unicorn): Unicorn => ({
            ...u,
            capacitiesLabels: u.capacities.map((c: number): string => capacities.find((c2: Capacity) => c2.id === c)?.label ?? ''),
          })
        )
      )
    );
  }
}
