import { Component, computed, inject, resource, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../service/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-contacts-list',
  imports: [
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  apiService = inject(ApiService);
  deleting = signal(false);

  loading = computed(() => this.contactResource.isLoading() || this.deleting());
  contactResource = resource({
    loader: () => this.apiService.getContacts(),
  });

  async deleteContact(id: number) {
    this.deleting.set(true);
    await this.apiService.deleteContact(id);
    this.deleting.set(false);
    this.contactResource.reload();
  }
}
