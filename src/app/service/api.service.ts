import { Injectable } from '@angular/core';
import { Contacts } from '../Models/contacts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private delay = 1000; // Simulate network delay
  private contacts: Contacts[] = [
    {
      id: 1,
      name: 'Raman',
      email: 'raman@est.com',
      phone: 11223344556677,
    },
    {
      id: 2,
      name: 'saman',
      email: 'saman@est.com',
      phone: 1156787989009,
    },
    {
      id: 3,
      name: 'Ronika',
      email: 'ronika@est.com',
      phone: 11344556677,
    },
    {
      id: 4,
      name: 'Roman',
      email: 'roman@est.com',
      phone: 11290987767667,
    },
    {
      id: 5,
      name: 'Dima',
      email: 'dima@est.com',
      phone: 1876764556677,
    },
    {
      id: 6,
      name: 'Misha',
      email: 'misha@est.com',
      phone: 198777334457,
    },
    {
      id: 7,
      name: 'Sasha',
      email: 'sasha@est.com',
      phone: 67898989656554,
    },
    {
      id: 8,
      name: 'Viktor',
      email: 'viktor@est.com',
      phone: 11288977657,
    },
    {
      id: 9,
      name: 'Sara',
      email: 'Sara@est.com',
      phone: 11223877665677,
    },
    {
      id: 10,
      name: 'Samet',
      email: 'Samet@est.com',
      phone: 1128776656677,
    },
    {
      id: 11,
      name: 'Sedna',
      email: 'sedna@est.com',
      phone: 109876545445667,
    },
  ];

  private generateUniqueId(): number {
    const existingIds = this.contacts.map((c) => c.id);
    const maxId = Math.max(...existingIds);
    return maxId + 1;
  }

  async getContacts(): Promise<Contacts[]> {
    await this.simulateDelay();

    // throw new Error('Error fetching contacts');

    return [...this.contacts];
  }

  async addContact(contact: Contacts): Promise<Contacts> {
    await this.simulateDelay();
    const newContact = {
      ...contact,
      id: this.generateUniqueId(),
    };
    this.contacts = [newContact, ...this.contacts];
    return newContact;
  }

  async deleteContact(id: number): Promise<void> {
    await this.simulateDelay();
    this.contacts = this.contacts.filter((c) => c.id !== id);
  }

  async updateContact(updatedContact: Contacts): Promise<Contacts> {
    await this.simulateDelay();
    const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index === -1) {
      throw new Error('Contact not found');
    }
    this.contacts[index] = updatedContact;
    return updatedContact;
  }

  async getContact(id: number): Promise<Contacts> {
    await this.simulateDelay();
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      throw new Error('Contact not found');
    }
    return contact;
  }

  private simulateDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }
}
