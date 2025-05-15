export interface PendingSchedule {
  staff: Staff[];
  pendings: Pending[];
}

export interface Staff {
  id: number;
  name: string;
  status: string;
  price: string;
}

export interface Pending {
  id: number;
  description: string;
  staffId: number | null;
  status: string | null;
  alertColor: string;
}
