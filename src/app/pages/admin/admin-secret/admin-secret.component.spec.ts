import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSecretComponent } from './admin-secret.component';

describe('AdminSecretComponent', () => {
  let component: AdminSecretComponent;
  let fixture: ComponentFixture<AdminSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSecretComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
