import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolverService } from './services/contact-resolver';

const routes: Routes = [
  {
    path: 'contact', component: ContactPageComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard] },
      { path: 'edit', component: ContactEditComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard] }
    ], canActivate: [AuthGuard]
  },
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService }, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsPageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupPageComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
