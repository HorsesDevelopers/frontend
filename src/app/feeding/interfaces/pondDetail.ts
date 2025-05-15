export interface PondDetail {
  id: number;
  name: string;
  imageUrl: string;
  ubication: string;
  waterType: string;
  volume: number;
  size: number;
  createdAt: string;
  fishPerTypeQuantity: { [type: string]: number };
  fish: Fish[];
  food: Food[];
}

interface Fish {
  id: number;
  type: string;
  quantity: number;
  joinedAt: string;
}

interface Sensor {
  id: number;
  name: string;
  type: string;
  value: number | string;
  unit: string;
  status: 'Connected' | 'Disconnected';
  lastUpdate?: Date | string;
}

interface Food {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  date: string;
}
