import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private firestore: Firestore) {}

  async submitForm(form: any) {
    const ref = collection(this.firestore, 'contacts');

    await addDoc(ref, {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      createdAt: new Date(),
    });

    alert('Message sent ✅');
  }
}
