import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CharactersMainComponent } from "./characters-main/characters-main.component";
import { CharactersRoutinModule } from "./characters-routing.module";
import { CommonModule } from "@angular/common";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogService } from "src/app/shared/services/dialog.service";
import { MatTooltipModule } from '@angular/material/tooltip';

export const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

  const matModules = [
    MatExpansionModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
  ];

@NgModule({
  declarations: [
    CharactersMainComponent
  ],
  imports: [
    ...matModules,
    CommonModule,
    CharactersRoutinModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    DialogService
  ],
})
export class CharactersModule { }
