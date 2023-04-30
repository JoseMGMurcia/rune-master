import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ARMOR_TYPES, ArmorType } from 'src/app/shared/constants/equip/armor.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public armors: ArmorType[] = ARMOR_TYPES;
  constructor(
    private translate: TranslateService,
    ) { }


  getArmorName(armor: ArmorType): string {
    return this.translate.instant(`PJ.ARMOR_TYPES.${armor.name}`);
  }

  getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? 'listLine-odd' : 'listLine-even';
  }

}
