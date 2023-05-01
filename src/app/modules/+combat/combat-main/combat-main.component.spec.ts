import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatMainComponent } from './combat-main.component';

describe('CombatMainComponent', () => {
  let component: CombatMainComponent;
  let fixture: ComponentFixture<CombatMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatMainComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CombatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
