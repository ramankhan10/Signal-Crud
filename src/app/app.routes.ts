import { Routes } from '@angular/router';
import { ContactsListComponent } from './componets/contacts-list/contacts-list.component';
import { AddContactComponent } from './componets/add-contact/add-contact.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    pathMatch: 'full',
  },
  {
    path: 'add',
    component: AddContactComponent,
  },
];
