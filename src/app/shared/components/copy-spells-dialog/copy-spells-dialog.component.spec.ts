import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CopySpellsDialogComponent } from './copy-spells-dialog.component';

describe('RaceDialogComponent', () => {
  let component: CopySpellsDialogComponent;
  let fixture: ComponentFixture<CopySpellsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopySpellsDialogComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CopySpellsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
