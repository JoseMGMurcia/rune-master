import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { EasyDialogComponent } from './components/easy-dialog/easy-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { WeaponDialogComponent } from './components/weapon-dialog/weapon-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ArmorDialogComponent } from './components/armor-dialog/armor-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RaceDialogComponent } from './components/race-dialog/race-dialog.component';
import { StatsDialogComponent } from './components/stats-dialog/stats-dialog.component';
import { SpellsDialogComponent } from './components/spells-dialog/spells-dialog.component';
import { CopySpellsDialogComponent } from './components/copy-spells-dialog/copy-spells-dialog.component';
import { EditNameDialogComponent } from './components/edit-name-dialog/edit-name-dialog.component';

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

const matModules = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
];

const components = [
  MenubarComponent,
  EasyDialogComponent,
  WeaponDialogComponent,
  ArmorDialogComponent,
  StatsDialogComponent,
  SpellsDialogComponent,
  CopySpellsDialogComponent,
  EditNameDialogComponent,
];


@NgModule({
  declarations: [
    ...components,
    RaceDialogComponent,
  ],
  imports: [
    ...matModules,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ...components,
  ]
})
export class SharedModule { }

