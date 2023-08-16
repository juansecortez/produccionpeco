import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductionByTurnComponent } from './production-by-turn/production-by-turn.component';
import { DemorasPorEquipoComponent } from './demoras-por-equipo/demoras-por-equipo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir a la página de inicio de sesión por defecto
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produccion', component: ProductionByTurnComponent },
  { path: 'demoras', component: DemorasPorEquipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
