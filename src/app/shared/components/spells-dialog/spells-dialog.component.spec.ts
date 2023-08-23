import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpellsDialogComponent } from './spells-dialog.component';

describe('RaceDialogComponent', () => {
  let component: SpellsDialogComponent;
  let fixture: ComponentFixture<SpellsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsDialogComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(SpellsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
