import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ActualizarPiezaComponent } from './components/actualizar-pieza/actualizar-pieza.component';
import { RegistroAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { AgregarVehiculoComponent } from './pages/vehiculo/agregar-vehiculo/agregar-vehiculo.component';
import { ClientComponent } from './components/client/client.component';
import { RegPiezaComponent } from './components/reg-pieza/reg-pieza.component';
import {LoginComponent} from './pages/login/login.component';
import { RegistrarMecanicoComponent } from './components/registrar-mecanico/registrar-mecanico.component';
// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'navbar', component: NavbarComponent },
//   { path: 'pieza', component: ActualizarPiezaComponent },
//   { path: 'registroAdmin', component: RegistroAdminComponent },
//   { path: 'vehiculo', component: AgregarVehiculoComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pieza', component: RegPiezaComponent },
  { path: 'registroAdmin', component: RegistroAdminComponent },
  { path: 'vehiculo', component: AgregarVehiculoComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'mecanico', component: RegistrarMecanicoComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);