import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { DetailsComponent } from './details/details.component';
import { HowItWorksComponent } from './screens/how-it-works/how-it-works.component';
import { ForCounselorsComponent } from './screens/for-counselors/for-counselors.component';
import { ForClientsComponent } from './screens/for-clients/for-clients.component';
import { PricingComponent } from './screens/pricing/pricing.component';
import { SupportComponent } from './screens/support/support.component';


const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id', // Route with a dynamic parameter for item ID
    component: DetailsComponent,
    title: 'Details Page',
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
    title: 'How It Works',
  },
  {
    path: 'for-counselors',
    component: ForCounselorsComponent,
    title: 'For Counselors',
  },
  {
    path: 'for-clients',
    component: ForClientsComponent,
    title: 'For Clients',
  },
  {
    path: 'pricing',
    component: PricingComponent,
    title: 'Pricing',
  },
  {
    path: 'support',
    component: SupportComponent,
    title: 'Support',
  },
];

export default routeConfig;
