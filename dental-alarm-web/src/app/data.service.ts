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
      patient: 'Ana Lopez',
    },
    {
      category: 'Implantes dentales',
      date: '17/12/2022 11:30',
      id: 1097178027,
      patient: 'Isabel Ramirez',
    },
    {
      category: 'Cirugía bucal',
      date: '1/6/2023 17:15',
      id: 1099955384,
      patient: 'Carlos Martinez',
    },
    {
      category: 'Cirugía bucal',
      date: '25/9/2022 18:30',
      id: 1085147851,
      patient: 'Juan Gonzalez',
    },
    {
      category: 'Coronas dentales',
      date: '1/9/2023 17:50',
      id: 1049076184,
      patient: 'Ana Lopez',
    },
    {
      category: 'Coronas dentales',
      date: '18/5/2023 18:20',
      id: 1054965704,
      patient: 'Miguel Torres',
    },
    {
      category: 'Implantes dentales',
      date: '19/8/2022 10:00',
      id: 1056094651,
      patient: 'Isabel Ramirez',
    },
    {
      category: 'Prótesis dentales',
      date: '2/9/2023 10:30',
      id: 1060629784,
      patient: 'Juan Gonzalez',
    },
    {
      category: 'Coronas dentales',
      date: '29/11/2021 11:00',
      id: 1061469590,
      patient: 'Luis Rodriguez',
    },
    {
      category: 'Limpieza dental',
      date: '30/8/2022 11:15',
      id: 1074555209,
      patient: 'Luis Rodriguez',
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
