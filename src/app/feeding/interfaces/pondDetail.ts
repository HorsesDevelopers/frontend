export interface PondDetail {
  id: number;
  name: string;
  ubication: string;
  waterType: string;
  volume: number;
  size: number;
  createdAt: string;
  imageUrl: string;
  fish: Fish[];
  food: Food[];
  fishPerTypeQuantity: { [key: string]: number };
}

interface Fish {
  id: number;
  type: string;
  quantity: number;
  joinedAt: string;
}



interface Food {
  id: number;
  name: string;
  brand: string;
  quantity: number;
  date: string;
}
