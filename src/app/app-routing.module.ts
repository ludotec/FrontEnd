import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'login', component: LoginComponent
   },
   {
    path:'editexp/:id', component: EditExperienciaComponent
   },
   {
    path:'editedu/:id', component: EditEducacionComponent
   },
   {
    path:'editpro/:id', component: EditProyectoComponent
   }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
