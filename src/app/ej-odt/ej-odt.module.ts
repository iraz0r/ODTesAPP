import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjOdtPageRoutingModule } from './ej-odt-routing.module';

import { EjOdtPage } from './ej-odt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjOdtPageRoutingModule
  ],
  declarations: [EjOdtPage]
})
export class EjOdtPageModule {}
