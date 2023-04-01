import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DB_TABLES } from './shared/constants/db.constants';
import { Character, Characteristic, cultureTypeEnum, Skill } from './shared/models/character.model';
import { CharactersService } from './shared/services/character.service';
import { DatabaseService } from './shared/services/db.service';

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

    // this.dbService.deleteAllData(DB_TABLES.PJS);





    // const pj = new Character('Yanafal Tarnils');
    // pj.race = 'Humano';
    // pj.profesion ='Guerrero';
    // pj.age = 20;
    // pj.culture = cultureTypeEnum.CIVILIZED;
    // pj.bornIn = 'Glamour';
    // pj.skills.push(new Skill('Otear', skillTypeEnum.AWARENESS, 30));
    // pj.skills.push(new Skill('Ataque Espada', skillTypeEnum.MANIPULATION, 75));
    // pj.characteristics.STR = new Characteristic( characteristicTypeEnum.STR, 14);
    // pj.characteristics.DEX = new Characteristic( characteristicTypeEnum.DEX, 16);
    // pj.characteristics.CON = new Characteristic( characteristicTypeEnum.CON, 12);
    // pj.characteristics.INT = new Characteristic( characteristicTypeEnum.INT, 10);
    // pj.characteristics.SIZ = new Characteristic( characteristicTypeEnum.SIZ, 14);
    // pj.characteristics.POW = new Characteristic( characteristicTypeEnum.POW, 10);
    // pj.characteristics.CHA = new Characteristic( characteristicTypeEnum.CHA, 12);;

    // this.dbService.saveData(DB_TABLES.PJS, pj);


    // this.dbService.deleteData(DB_TABLES.PJS, 'Yanafal Tarnils_1680343463312');

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
