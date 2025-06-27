export class Pond {
  id: number;
  name: string;
  ubication: string;
  waterType: string;
  volume: number;
  area: number;

  constructor(
    id: number,
    name: string,
    ubication: string,
    waterType: string,
    volume: number,
    area: number
  ) {
    this.id = id;
    this.name = name;
    this.ubication = ubication;
    this.waterType = waterType;
    this.volume = volume;
    this.area = area;
  }
}
