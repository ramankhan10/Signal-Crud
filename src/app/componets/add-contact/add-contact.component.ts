import { Component, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-add-contact',
  imports: [
    RouterLink,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss',
})
export class AddContactComponent {
  apiService = inject(ApiService);
  router = inject(Router)

  name = signal('');
  email = signal('');
  phone = signal<number>(0);

  saving = signal(false);

  async save() {
    this.saving.set(true);
    await this.apiService.addContact({
      id: 0,
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
    });
    this.saving.set(false);
    this.router.navigate(['/']);
  }
}
