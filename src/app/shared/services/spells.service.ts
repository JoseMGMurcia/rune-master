import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spell } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  public spiritualSpells: BehaviorSubject<any> = new BehaviorSubject(null);
  public spiritualSpells$ =this.spiritualSpells.asObservable();

  public setGiftData(data: Spell[]): void {
    this.spiritualSpells.next(data);
  }
}