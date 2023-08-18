export class RaceTypeClass {
  public id = '';
  public name = '';
}

export const RACES: RaceTypeClass[] = [
  { id: 'HUMAN',  name: 'HUMAN' },
  { id: 'MOROCATH', name: 'MOROCATH' },
  { id: 'DUCK', name: 'DUCK' },
  { id: 'NEWLING', name: 'NEWLING' },
  { id: 'AGIMORI', name: 'AGIMORI' },
  { id: 'TUSK_RIDER', name: 'TUSK_RIDER'},
  { id: 'BROO', name: 'BROO'},
];

export enum RaceTypeEnum {
  HUMAN = 'HUMAN',
  MOROCATH = 'MOROCATH',
  DUCK = 'DUCK',
  NEWLING = 'NEWLING',
  AGIMORI = 'AGIMORI',
  TUSK_RIDER = 'TUSK_RIDER',
  BROO = 'BROO',
}

export type RaceType = 'HUMAN' | 'MOROCATH' | 'DUCK' | 'NEWLING' | 'AGIMORI' | 'TUSK_RIDER' | 'BROO';