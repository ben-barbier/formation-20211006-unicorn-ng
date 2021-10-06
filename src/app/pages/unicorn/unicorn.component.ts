import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.scss'],
})
export class UnicornComponent {
  public unicorn: Unicorn | undefined;

  constructor(private readonly _unicornsService: UnicornsService, private readonly _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params // TODO: fermer le tuyau
      .pipe(switchMap((params) => this._unicornsService.get(params.id)))
      .subscribe((unicorn) => (this.unicorn = unicorn));
  }
}
