import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnicornsService } from '../services/unicorns.service';

@Injectable({
  providedIn: 'root',
})
export class EvenGuard implements CanActivate {
  constructor(private readonly _unicornsService: UnicornsService, private readonly _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> {
    return this._unicornsService
      .get(route.params.id)
      .pipe(map((unicorn) => (unicorn.birthyear % 2 ? this._router.createUrlTree(['']) : true)));
  }
}
