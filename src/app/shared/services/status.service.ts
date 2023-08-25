import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public targetOfSpellsCopy: BehaviorSubject<any> = new BehaviorSubject(null);
  private targetOfSpellsCopy$ = this.targetOfSpellsCopy.asObservable();

  public setTargetOfSpellsCopy(data: string[]): void {
    this.targetOfSpellsCopy.next(data);
  }
}
