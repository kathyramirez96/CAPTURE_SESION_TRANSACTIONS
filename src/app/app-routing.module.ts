import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'formulario'
  },
  {
    path:'formulario',
    component:FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
