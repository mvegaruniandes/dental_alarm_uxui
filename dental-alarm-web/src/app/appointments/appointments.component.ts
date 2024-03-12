import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments: any;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.appointments = this.dataService.getAppointments();
  }
}
