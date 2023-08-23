import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DB_TABLES } from './shared/constants/db.constants';
import { Character } from './shared/models/character.model';
import { CharactersService } from './shared/services/character.service';
import { DatabaseService } from './shared/services/db.service';
import { JsonService } from './shared/services/json.service';
import { SpellsService } from './shared/services/spells.service';

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
    private jsonService: JsonService,
    private SpellService: SpellsService,
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
    this.loadSpells();
  }

  private async loadCharacters() {
    this.dbService.getAllData(DB_TABLES.PJS).then((characters: Character[]) => {
      this.characterService.setCharacters(characters);
      this.characters = characters;
      console.log(characters);
    });
  }

  private loadSpells() {
    this.jsonService.getSpiritSpells('../assets/i18n/spirit-magic.es.json').subscribe((data) => {
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.SpellService.setSpitirualSpellsData(data);
    });
  }
}
