export interface PondDetail {
  id: number;
  name: string;
  ubication: string;
  waterType: string;
  volume: number;
  size: number;
  createdAt: string;
  fish: Fish[];
}

interface Fish {
  id: number;
  type: string;
  quantity: number;
  joinedAt: string;
}
