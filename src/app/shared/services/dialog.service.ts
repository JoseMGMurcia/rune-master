import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { EasyDialogComponent } from '../components/easy-dialog/easy-dialog.component';
import { WeaponDialogComponent } from '../components/weapon-dialog/weapon-dialog.component';
import { Character, Weapon } from '../models/character.model';
import { ArmorDialogComponent } from '../components/armor-dialog/armor-dialog.component';
import { RaceDialogComponent } from '../components/race-dialog/race-dialog.component';
import { StatsDialogComponent } from '../components/stats-dialog/stats-dialog.component';
import { SpellsDialogComponent } from '../components/spells-dialog/spells-dialog.component';
import { CopySpellsDialogComponent } from '../components/copy-spells-dialog/copy-spells-dialog.component';
import { EditNameDialogComponent } from '../components/edit-name-dialog/edit-name-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  openEasyDialog(text: string, fnConfirm: ()=> void): void {
    const dialogRef = this.dialog.open(EasyDialogComponent, {
      data: {
        title: this.translate.instant('COMMONS.WARNING'),
        text,
        confirm: () => { fnConfirm(); }
      }
    });
  }
  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed' + result);
  // });


  openWeaponDialog(character: Character): void {
    this.dialog.open(WeaponDialogComponent, {
      data: { character }
    });
  }

  openEditWeaponDialog(character: Character, weapon: Weapon): void {
    this.dialog.open(WeaponDialogComponent, {
      data: { character, weapon, swEditing: true }
    });
  }

  openArmorDialog(character: Character): void {
    this.dialog.open(ArmorDialogComponent, {
      data: { character }
    });
  }

  openRaceDialog(character: Character): void {
    this.dialog.open(RaceDialogComponent, {
      data: { character }
    });
  }

  openStatsDialog(character: Character): void {
    this.dialog.open(StatsDialogComponent, {
      data: { character }
    });
  }

  openSpellsDialog(character: Character): void {
    this.dialog.open(SpellsDialogComponent, {
      data: { character }
    });
  }

  openSpellsCopyDialog(character: Character): void {
    this.dialog.open(CopySpellsDialogComponent, {
      data: { character }
    });
  }

  openEditNameDialog(character: Character): void {
    this.dialog.open(EditNameDialogComponent, {
      data: { character }
    });
  }
}
