import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DB_TABLES } from 'src/app/shared/constants/db.constants';
import { Character } from 'src/app/shared/models/character.model';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private db: DatabaseService
    ) { }

  ngOnInit(): void {

  }

}
