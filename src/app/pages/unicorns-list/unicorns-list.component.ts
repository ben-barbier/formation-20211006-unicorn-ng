import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsDispatchers } from '../../store/dispatchers/unicorns.dispatchers';
import { UnicornsSelectors } from '../../store/selectors/unicorns.selectors';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns$ = this._unicornsSelectors.unicorns$;
  public trackById = (index: number, unicorn: Unicorn) => unicorn.id;

  constructor(private readonly _unicornsSelectors: UnicornsSelectors, private readonly _unicornsDispatchers: UnicornsDispatchers) {
    this._unicornsDispatchers.getUnicorns();
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this._unicornsDispatchers.deleteUnicorn(unicorn);
  }
}
