import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsPageRoutingModule } from './appointments-routing.module';

import { AppointmentsPage } from './appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(), // Añade .forRoot() aquí
    AppointmentsPageRoutingModule,
  ],
  declarations: [AppointmentsPage],
})
export class AppointmentsPageModule {}
