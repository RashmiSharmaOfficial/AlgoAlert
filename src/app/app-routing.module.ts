import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { FeaturesComponent } from './features/features.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to Home by default
  // { path: 'home', component: HomeComponent },
  // { path: 'features', component: FeaturesComponent },
  // { path: 'pricing', component: PricingComponent },
  // { path: 'contact', component: ContactComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', redirectTo: '/home' } // Wildcard route for handling unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
