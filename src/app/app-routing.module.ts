import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentaireComponent } from './alimentaire/alimentaire.component';
import { ElectriciteComponent } from './electricite/electricite.component';
import { PoissonsComponent } from './poissons/poissons.component';
import { SanteComponent } from './sante/sante.component';

const routes: Routes = [
  {
    path: 'agro-alimentaire',
    component: AlimentaireComponent
  },
  {
    path: 'poissons_viandes',
    component: PoissonsComponent
  },
  {
    path: 'beaute_sante',
    component: SanteComponent
  },
  {
    path:'electricite',
    component: ElectriciteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
