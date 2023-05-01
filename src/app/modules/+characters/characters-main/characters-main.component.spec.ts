import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersMainComponent } from './characters-main.component';

describe('CharactersMainComponent', () => {
  let component: CharactersMainComponent;
  let fixture: ComponentFixture<CharactersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersMainComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharactersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
