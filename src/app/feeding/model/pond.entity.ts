export class Pond {
  id: number;
  name: string;
  sensorQuantity: number;
  fishQuantity: number;
  imageUrl: string;

  constructor(pond:{id?: number, name?: string, sensorQuantity?: number, fishQuantity?: number, imageUrl?: string}) {
    this.id = pond.id || 0;
    this.name = pond.name || '';
    this.sensorQuantity = pond.sensorQuantity || 0;
    this.fishQuantity = pond.fishQuantity || 0;
    this.imageUrl = pond.imageUrl || '';
  }
}
