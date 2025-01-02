import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { DetailsComponent } from './details/details.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Page',
  },
  {
    path: 'how-it-works',
    component: ComingSoonComponent,
    data: { title: 'How It Works' },
  },
  {
    path: 'for-counselors',
    component: ComingSoonComponent,
    data: { title: 'For Counselors' },
  },
  {
    path: 'for-clients',
    component: ComingSoonComponent,
    data: { title: 'For Clients' },
  },
  {
    path: 'pricing',
    component: ComingSoonComponent,
    data: { title: 'Pricing' },
  },
  {
    path: 'support',
    component: ComingSoonComponent,
    data: { title: 'Support' },
  },
];

export default routeConfig;
