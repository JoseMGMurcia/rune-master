import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatDetailComponent } from './combat-detail.component';

describe('CombatDetailComponent', () => {
  let component: CombatDetailComponent;
  let fixture: ComponentFixture<CombatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
