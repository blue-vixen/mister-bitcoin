import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { NgChartsModule } from 'ng2-charts';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    HomePageComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    StatisticsPageComponent,
    SignupPageComponent,
    TransferFundsComponent,
    MovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
