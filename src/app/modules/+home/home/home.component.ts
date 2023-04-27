import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ARMOR_TYPES, ArmorType } from 'src/app/shared/constants/equip/armor.const';
import { DatabaseService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public armors: ArmorType[] = [];
  public swShow = false;
  constructor(
    private translate: TranslateService,
    private db: DatabaseService
    ) { }

  ngOnInit(): void {
   this.fetch();
  }

  private fetch(): void {
    this.armors = ARMOR_TYPES;
    this.swShow = true;
  }

  getArmorName(armor: ArmorType): string {
    return this.translate.instant(`PJ.ARMOR_TYPES.${armor.name}`);
  }

  getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? 'listLine-odd' : 'listLine-even';
  }

}
