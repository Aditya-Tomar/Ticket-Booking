export interface TrainCoachInterface { 
  coachName: string;
  totalSeat: number;
  availableSeats: number;
  seats: TrainSeatsInterface[]
}

export interface TrainSeatsInterface {
  number: number;
  isBooked: boolean;
}