import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorns-list',
  templateUrl: './unicorns-list.component.html',
  styleUrls: ['./unicorns-list.component.scss'],
})
export class UnicornsListComponent {
  public unicorns: Unicorn[] = [];

  constructor(private readonly _unicornsService: UnicornsService) {
    this._unicornsService.getAllWithCapacitiesLabels2().subscribe((unicorns) => (this.unicorns = unicorns));
  }

  public deleteUnicorn(unicorn: Unicorn): void {
    this._unicornsService.delete(unicorn).subscribe(() => {
      this.unicorns = this.unicorns.filter((u) => u.id !== unicorn.id);
    });
  }
}
