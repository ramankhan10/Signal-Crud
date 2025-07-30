import { Routes } from '@angular/router';
import { ContactsListComponent } from './componets/contacts-list/contacts-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    pathMatch: 'full',
  },
];
