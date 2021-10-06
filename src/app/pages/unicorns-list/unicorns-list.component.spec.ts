import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnicornsListComponent } from './unicorns-list.component';

describe('UnicornsListComponent', () => {
  let component: UnicornsListComponent;
  let fixture: ComponentFixture<UnicornsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnicornsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
