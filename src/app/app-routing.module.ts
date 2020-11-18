import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ActualizarPiezaComponent } from './components/actualizar-pieza/actualizar-pieza.component';
import { AgregarVehiculoComponent } from './pages/vehiculo/agregar-vehiculo/agregar-vehiculo.component';
import {LoginComponent} from './pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {DashboardClienteComponent} from './pages/dashboard-cliente/dashboard-cliente.component';
import { GenerarFacturaComponent } from './components/generar-factura/generar-factura.component';
import { TableListAdministradorComponent } from './components/table-list-administrador/table-list-administrador.component';
import { TableListClienteComponent } from './components/table-list-cliente/table-list-cliente.component';
import { TableListMecanicoComponent } from './components/table-list-mecanico/table-list-mecanico.component';
import { TableListPiezaComponent } from './components/table-list-pieza/table-list-pieza.component';
import { TableListVehiculoComponent } from './components/table-list-vehiculo/table-list-vehiculo.component';
const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'vehiculo', component: AgregarVehiculoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:idAdmin', component: DashboardComponent},
  { path: 'factura', component: GenerarFacturaComponent},
  
  { path: 'administrador', component: TableListAdministradorComponent},
  { path: 'clientes', component: TableListClienteComponent},
  { path: 'dashboardClientes/:idCliente', component: DashboardClienteComponent},
  { path: 'mecanicos', component: TableListMecanicoComponent},
  { path: 'clientes', component: TableListClienteComponent},
  { path: 'piezas', component: TableListPiezaComponent},
  { path: 'vehiculos', component: TableListVehiculoComponent},
  
  { path: '**', pathMatch: 'full', redirectTo: 'home' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
