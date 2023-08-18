import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ARMOR_TYPES, ArmorType } from 'src/app/shared/constants/equip/armor.const';
import { SpellsService } from 'src/app/shared/services/spells.service';
import { Subject, takeUntil } from 'rxjs';
import { Spell, Spells } from 'src/app/shared/models/character.model';
import { TRAINER_WEELKY_COST, TRAIN_COSTS } from 'src/app/shared/models/train-models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy{
  public armors: ArmorType[] = ARMOR_TYPES;
  public TRAINING_COSTS = TRAIN_COSTS;
  public TRAINER_WEELKY_COST = TRAINER_WEELKY_COST
  public spells: Spells = new Spells();
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public spell: Spell = new Spell('');
  constructor(
    private translate: TranslateService,
    private spellService: SpellsService,
  ) { }
  
  ngOnInit(): void {
    this.fetch();
  }

  setSpell(spell: Spell) {
    this.spell = spell;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getArmorName(armor: ArmorType): string {
    return this.translate.instant(`PJ.ARMOR_TYPES.${armor.name}`);
  }

  getActiveText(spell: Spell): string {
    const texts = this.translate.instant('PJ.SPELL_ACTION_TYPE');
    return spell.pasive ? texts.PASSIVE : texts.ACTIVE;
  }

  getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? 'listLine-odd' : 'listLine-even';
  }

  private fetch() {
    this.spellService.spiritualSpells$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((spells) => {
        this.spells.SPIRITUAL = spells;
      });
  }
}
