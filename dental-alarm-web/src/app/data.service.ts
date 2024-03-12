import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  appointments = [
    {
      category: 'Coronas dentales',
      date: '6/12/2022 15:30',
      id: 1068283834,
      patient: 'Ana Maria Lopez',
    },
    {
      category: 'Implantes dentales',
      date: '17/12/2022 11:30',
      id: 1097178027,
      patient: 'Isabel Pantoja Ramirez',
    },
    {
      category: 'Cirugía bucal',
      date: '1/6/2023 17:15',
      id: 1099955384,
      patient: 'Carlos Andres Martinez',
    },
    {
      category: 'Cirugía bucal',
      date: '25/9/2022 18:30',
      id: 1085147851,
      patient: 'Juan David Gonzalez',
    },
    {
      category: 'Coronas dentales',
      date: '1/9/2023 17:50',
      id: 1049076184,
      patient: 'Carlos José Torres',
    },
  ];

  constructor() {}

  public getAppointments(): Array<{
    category: string;
    date: string;
    id: number;
    patient: string;
  }> {
    return this.appointments;
  }
}
