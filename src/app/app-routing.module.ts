import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';
import { RegistroAdminComponent } from './components/registrar-admin/registrar-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'navbar', component: NavbarComponent},
  {path: 'registrar-admin', component: RegistroAdminComponent},
  {path: 'update', component: UpdateStockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
