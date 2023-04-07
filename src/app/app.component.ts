import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DB_TABLES } from './shared/constants/db.constants';
import { Character, Characteristic, CultMember, cultMemberTypeEnum, cultureTypeEnum, Skill } from './shared/models/character.model';
import { CharactersService } from './shared/services/character.service';
import { DatabaseService } from './shared/services/db.service';
import { setInitialHumanCharacter } from './shared/utils/character-creation.utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  public characters: Character[] = [];

  constructor(
    private translate: TranslateService,
    private dbService: DatabaseService,
    private characterService: CharactersService,
  ) { }

  ngOnDestroy(): void {
    this.dbService.closeDatabase();
  }
  title = 'rune-master';

  async ngOnInit() {
    this.fetch();
  }

  private setTranslationsLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  private async fetch() {
    this.setTranslationsLanguage('es');
    this.dbService.createDatabase();

    this.loadCharacters();
  }

  private async loadCharacters() {
    this.dbService.getAllData(DB_TABLES.PJS).then((characters: Character[]) => {
      this.characterService.setCharacters(characters);
      this.characters = characters;
      console.log(characters);
    });
  }
}
