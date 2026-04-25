import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  phone = '201012038286';
  message = 'Hello, I would like to inquire about your services';

  get whatsappLink() {
    return `https://wa.me/${this.phone}?text=${encodeURIComponent(this.message)}`;
  }
}
