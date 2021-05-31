import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {  MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel'

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategorieComponent } from './categorie/categorie.component';
import { NavComponent } from './nav/nav.component';
import { ViandeComponent } from './viande/viande.component';
import { BeauteComponent } from './beaute/beaute.component';
import { SanteComponent } from './sante/sante.component';
import { EquipementComponent } from './equipement/equipement.component';
import { FooterComponent } from './component/footer/footer.component';
import { PanierComponent } from './component/panier/panier.component';





@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    NavComponent,
    ViandeComponent,
    BeauteComponent,
    SanteComponent,
    EquipementComponent,
    FooterComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatDividerModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
