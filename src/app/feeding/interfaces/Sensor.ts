export interface Sensor {
  id: number;
  pond_id: number | null;
  oxygen: number;
  nytrogen: number;
  temperature: string;
  status: string;
}
