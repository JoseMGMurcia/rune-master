import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private dbService: DatabaseService,
    ) { }

  async ngOnInit() {
    this.setTranslationsLanguage('es');
    this.dbService.createDatabase();
  }

  private setTranslationsLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
