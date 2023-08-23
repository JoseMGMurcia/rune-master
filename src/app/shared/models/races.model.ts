export class RaceTypeClass {
  public id = '';
  public name = '';
}

export const RACES: RaceTypeClass[] = [
  { id: 'AGIMORI', name: 'AGIMORI' },
  { id: 'BROO', name: 'BROO'},
  { id: 'DRAGON', name: 'DRAGON'},
  { id: 'DUCK', name: 'DUCK' },
  { id: 'HUMAN',  name: 'HUMAN' },
  { id: 'MOROCATH', name: 'MOROCATH' },
  { id: 'NEWLING', name: 'NEWLING' },
  { id: 'TUSK_RIDER', name: 'TUSK_RIDER'},
];

export enum RaceTypeEnum {
  AGIMORI = 'AGIMORI',
  BROO = 'BROO',
  DUCK = 'DUCK',
  DRAGON = 'DRAGON',
  HUMAN = 'HUMAN',
  MOROCATH = 'MOROCATH',
  NEWLING = 'NEWLING',
  TUSK_RIDER = 'TUSK_RIDER',
}

export type RaceType = RaceTypeEnum.AGIMORI | RaceTypeEnum.BROO | RaceTypeEnum.DUCK | RaceTypeEnum.DRAGON | RaceTypeEnum.HUMAN | RaceTypeEnum.MOROCATH | RaceTypeEnum.NEWLING | RaceTypeEnum.TUSK_RIDER;