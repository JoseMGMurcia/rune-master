import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil} from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EasyDialogComponent } from 'src/app/shared/components/easy-dialog/easy-dialog.component';

@Component({
  selector: 'app-characters-main',
  templateUrl: './characters-main.component.html',
})
export class CharactersMainComponent implements OnInit, OnDestroy{

  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private characterService: CharactersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public manageFavourite($event:any, pj: Character) {
    this.preventAcordionExpansion($event);
    pj.favorite = !pj.favorite;
  }

  public deleteCharacter(pj: Character) {
    this.characters = this.characters.filter((character) => character.id !== pj.id);
    this.characterService.setCharacters(this.characters);
  }



  handleDelete($event:any, character: Character): void {
    this.preventAcordionExpansion($event);
    const dialogRef = this.dialog.open(EasyDialogComponent, {
      data: {title: 'VAMÓ A BORRAR',
       text: '¿Estás seguro?',
       confirm: () => {
          console.log('confirm');
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
    });
  }



  private fetch() {
    this.loadCharacters();
  }

  public preventAcordionExpansion(event: any) {//TODO private
    event.stopPropagation();
    event.preventDefault();
  }

  private loadCharacters() {
    // TODO start loading
    this.characterService.characters
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((characters)=> {
        this.characters = characters;
        this.filteredCharacters = characters;
        // TODO end loading
      });
    }
}
