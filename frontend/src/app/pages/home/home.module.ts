import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/components/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AssociationsComponent } from './components/associations/associations.component';
import { AssociationComponent } from './components/associations/components/association/association.component';
import { FaqComponent } from './components/faq/faq.component';
import { TemoignageComponent } from './components/temoignage/temoignage.component';
import { TemoignageTemoignageComponent } from './components/temoignage/temoignage/temoignage.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    FaqComponent,
    TemoignageComponent,
    TemoignageTemoignageComponent,
    AssociationsComponent,
    AssociationComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
