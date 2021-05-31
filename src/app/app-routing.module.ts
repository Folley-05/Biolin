import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeauteComponent } from './beaute/beaute.component';
import { EquipementComponent } from './equipement/equipement.component';
import { SanteComponent } from './sante/sante.component';
import { ViandeComponent } from './viande/viande.component';

const routes: Routes = [
 {
   path: 'sante',
   component: SanteComponent
 },
 {
   path: 'viande',
   component: ViandeComponent
 },
 {
   path: 'equipement',
   component: EquipementComponent
 },
 {
   path: 'beaute',
   component: BeauteComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
