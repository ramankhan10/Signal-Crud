import { Component, signal } from '@angular/core';
import { Contacts } from '../../Models/contacts';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-contacts-list',
  imports: [MatListModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  contacts = signal<Contacts[]>([
  
  ]);
}
