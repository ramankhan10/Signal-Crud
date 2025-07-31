import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  imports: [RouterLink,MatInputModule,MatButtonModule,MatFormFieldModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss'
})
export class AddContactComponent {

}
