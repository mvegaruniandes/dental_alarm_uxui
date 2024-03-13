import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  appointments = [
    {
      categoria: 'Control Ortodoncia',
      estado: 'Pendiente',
      estadoColor: '#28A745',
      fecha: '10/04/2024 11:00',
    },
    {
      categoria: 'Examen Dental',
      estado: 'Confirmada',
      estadoColor: '#000000',
      fecha: '11/04/2024 09:30',
    },
    {
      categoria: 'Limpieza Dental',
      estado: 'Cancelada',
      estadoColor: 'D41819',
      fecha: '12/04/2024 14:15',
    },
    {
      categoria: 'Consulta',
      estado: 'Pendiente',
      estadoColor: '#28A745',
      fecha: '13/04/2024 16:45',
    },
    // Agrega más registros de citas según sea necesario
  ];
}
