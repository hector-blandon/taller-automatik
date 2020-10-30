import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './components/contact/contact.component';
import { ClientComponent } from './components/client/client.component';
import { ActualizarPiezaComponent } from './components/actualizar-pieza/actualizar-pieza.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroAdminComponent } from './components/registrar-admin/registrar-admin.component';
import { AgregarVehiculoComponent } from './pages/vehiculo/agregar-vehiculo/agregar-vehiculo.component';
import { TeamComponent } from './components/team/team.component';
import { RegPiezaComponent } from './components/reg-pieza/reg-pieza.component';
import { RegistrarMecanicoComponent } from './components/registrar-mecanico/registrar-mecanico.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TableListAdministradorComponent } from './components/table-list-administrador/table-list-administrador.component';
import { ActualizarAdminComponent } from './components/actualizar-admin/actualizar-admin.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ContactComponent,
    ActualizarPiezaComponent,
    RegistroAdminComponent,
    AgregarVehiculoComponent,
    TeamComponent,
    ClientComponent,
    RegPiezaComponent,
    RegistrarMecanicoComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    TableListAdministradorComponent,
    ActualizarAdminComponent,
    ActualizarClienteComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    // AppRoutingModule,
    APP_ROUTING,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
  ],
  exports: [MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
