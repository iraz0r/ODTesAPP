import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjOdtPage } from './ej-odt.page';

const routes: Routes = [
  {
    path: '',
    component: EjOdtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjOdtPageRoutingModule {}
