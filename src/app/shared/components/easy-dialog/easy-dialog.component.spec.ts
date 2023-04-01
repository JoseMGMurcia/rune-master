import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyDialogComponent } from './easy-dialog.component';

describe('MenubarComponent', () => {
  let component: EasyDialogComponent;
  let fixture: ComponentFixture<EasyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
