export interface Schedule {
  id?: number;
  name: string;
  species: string;
  size: number;
  mass: number;
  foodKind: string;
  foodWeight: number;
  loopC: number;
  sensorConditionA: string;
  sensorConditionB: string;
  comment: string;
}
