export interface Event {
  id: string;
  title: string;
  type: 'networking' | 'workshop' | 'conference' | 'seminar';
  date: string;
  time: string;
  location: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  featured?: boolean;
  category: string;
  capacity?: number;
  registeredCount?: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface EventRegistration {
  eventId: string;
  userId: string;
  registrationDate: string;
  status: 'registered' | 'attended' | 'cancelled';
}
