export class Fish {
  id: number;
  type: string;
  quantity: number;
  pondId: number;
  createdAt: string;

  constructor(
    id: number,
    type: string,
    quantity: number,
    pondId: number,
    createdAt: string
  ) {
    this.id = id;
    this.type = type;
    this.quantity = quantity;
    this.pondId = pondId;
    this.createdAt = createdAt;
  }
}

export class Pond {
  id: number;
  name: string;
  ubication: string;
  waterType: string;
  volume: number;
  area: number;
  fishes: Fish[];
  createdAt: string;

  constructor(
    id: number,
    name: string,
    ubication: string,
    waterType: string,
    volume: number,
    area: number,
    fishes: Fish[],
    createdAt: string
  ) {
    this.id = id;
    this.name = name;
    this.ubication = ubication;
    this.waterType = waterType;
    this.volume = volume;
    this.area = area;
    this.fishes = fishes;
    this.createdAt = createdAt;
  }
}
