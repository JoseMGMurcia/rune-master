import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorDialogComponent } from './armor-dialog.component';

describe('ArmorDialogComponent', () => {
  let component: ArmorDialogComponent;
  let fixture: ComponentFixture<ArmorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmorDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
