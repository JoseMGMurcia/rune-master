import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatabaseService } from './shared/services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private translate: TranslateService,
    private dbService: DatabaseService,
  ) { }

  ngOnDestroy(): void {
    this.dbService.closeDatabase();
  }
  title = 'rune-master';

  async ngOnInit() {
    this.setTranslationsLanguage('es');
    this.dbService.createDatabase();
  }

  private setTranslationsLanguage(language: string): void {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
