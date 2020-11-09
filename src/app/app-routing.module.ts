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
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { RegistrarMecanicoComponent } from './components/registrar-mecanico/registrar-mecanico.component';
import { GenerarFacturaComponent } from './components/generar-factura/generar-factura.component';
import { TableListAdministradorComponent } from './components/table-list-administrador/table-list-administrador.component';
import { TableListClienteComponent } from './components/table-list-cliente/table-list-cliente.component';
import { TableListMecanicoComponent } from './components/table-list-mecanico/table-list-mecanico.component';
import { TableListPiezaComponent } from './components/table-list-pieza/table-list-pieza.component';
import { TableListVehiculoComponent } from './components/table-list-vehiculo/table-list-vehiculo.component';
const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'pieza', component: RegPiezaComponent },
  { path: 'registroAdmin', component: RegistroAdminComponent },
  { path: 'vehiculo', component: AgregarVehiculoComponent },
  { path: 'cliente', component: ClientComponent },
  { path: 'mecanico', component: RegistrarMecanicoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'factura', component: GenerarFacturaComponent},
  
  { path: 'administrador', component: TableListAdministradorComponent},
  { path: 'clientes', component: TableListClienteComponent},
  { path: 'mecanicos', component: TableListMecanicoComponent},
  { path: 'clientes', component: TableListClienteComponent},
  { path: 'piezas', component: TableListPiezaComponent},
  { path: 'vehiculos', component: TableListVehiculoComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
