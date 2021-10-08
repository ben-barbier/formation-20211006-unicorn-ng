import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.scss'],
})
export class UnicornComponent {
  public unicorn$: Observable<Unicorn | undefined>;

  constructor(
    private readonly _unicornsSelectors: UnicornsSelectors,
    private readonly _unicornsDispatchers: UnicornsDispatchers,
    private readonly _activatedRoute: ActivatedRoute
  ) {
    this.unicorn$ = this._activatedRoute.params.pipe(
      tap((e) => {
        debugger;
      }),
      tap((params) => this._unicornsDispatchers.getUnicorn(+params.id)),
      tap((e) => {
        debugger;
      }),
      switchMap((params) => this._unicornsSelectors.unicorn$(+params.id)),
      tap((e) => {
        debugger;
      })
    );
  }
}
