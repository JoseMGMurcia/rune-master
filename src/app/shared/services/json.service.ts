import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Spell } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  public getSpiritSpells(jsonFile: string) {
    return this.http.get(jsonFile).pipe(
      map(data => {
        return data as Spell[];
      })
    );
  }
}