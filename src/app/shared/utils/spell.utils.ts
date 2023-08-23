import { NUMBERS } from '../constants/number.constants';
import { Spell, Spells } from '../models/character.model';

export const getSpiritualSpell = (spells: Spells, name: string, spiritualPoints = NUMBERS.N_1): Spell => {
  const spell = spells.SPIRITUAL.find(s => s.name === name);
  const spellCopy = spell ? { ...spell} : new Spell(name);
  spellCopy.spiritualPoints = spellCopy.stackable ? spiritualPoints : spellCopy.spiritualPoints;
  return spellCopy;
};
