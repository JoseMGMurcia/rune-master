import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../models/character.model';
import { DatabaseService } from './db.service';
import { DB_TABLES } from '../constants/db.constants';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private db: DatabaseService
  ) { }


  public characters: BehaviorSubject<any> = new BehaviorSubject([]);
  public characters$ = this.characters.asObservable();

  public character: BehaviorSubject<any> = new BehaviorSubject(null);
  public character$ = this.character.asObservable();


  public setCharacters(characters: Character[]): void {
    this.db.saveData(DB_TABLES.PJS, characters);
    this.characters.next(characters);
  }

  public setCharacter(character: Character): void {
    this.character.next(character);
  }

  public updateOrAddCharacter(character: Character): void {
    this.db.saveData(DB_TABLES.PJS, [character]);
  }

  public deleteCharacter(character: Character): void {
    this.db.deleteData(DB_TABLES.PJS, character.id);
  }
}
