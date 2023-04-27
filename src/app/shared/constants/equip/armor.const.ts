import { Armor } from "../../models/character.model";

export class ArmorType {
  name = '';
  armor = 0;
  weights: number[] = [];
  values: number[] = [];

  constructor(name?: string, armor?: number, weights?: number[], values?: number[]) {
    this.name = name ? name : '';
    this.armor = armor ? armor : 0;
    this.weights = weights ? weights : [];
    this.values = values ? values : [];
  }
}

export const ARMOR_TYPES: ArmorType[] = [
  {
    name: 'VEST',
    armor: 0,
    weights: [2,2.5,3,3.5],
    values: [40,45,50,60]
  },
  {
    name: 'SOFT_LEATHER',
    armor: 1,
    weights: [3,3.5,4,5],
    values: [60,70,80,100]
  },
  {
    name: 'HARD_LEATHER',
    armor: 2,
    weights: [4,5,6,7],
    values: [80,100,120,140]
  },
  {
    name: 'BOILED_LEATHER',
    armor: 3,
    weights: [4,5,6,7],
    values: [180,225,270,315]
  },
  {
    name: 'BEZANTED',
    armor: 4,
    weights: [6,7.5,9,10.5],
    values: [420,563,630,735]
  },
  {
    name: 'RING_MAIL',
    armor: 5,
    weights: [8,10,12,14],
    values: [880,1100,1320,1540]
  },
  {
    name: 'RHINO_SKIN',
    armor: 6,
    weights: [8,10,12,14],
    values: [360,450,540,630]
  },
  {
    name: 'LAMELLAR',
    armor: 6,
    weights: [14,18,21.5,25],
    values: [2800,3600,4300,5000]
  },
  {
    name: 'SCALE_MAIL',
    armor: 7,
    weights: [16,20,24,28],
    values: [1920,2400,2880,3360]
  },
  {
    name: 'BRIGANDINE',
    armor: 7,
    weights: [17.5, 22, 26.5, 31],
    values: [3500,4400,5300,6200]
  },
  {
    name: 'CHAIN_MAIL',
    armor: 7,
    weights: [16,20,24,28],
    values: [3840,4800,5760,6720]
  },
  {
    name: 'PLATE_MAIL',
    armor: 8,
    weights: [20,25,30,35],
    values: [5400,6750,8100,9450]
  }
];



