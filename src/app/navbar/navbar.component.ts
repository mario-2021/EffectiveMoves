import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  EffectiveMovies = 'assets/img/unnamed.png';
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchTerm },
    });
  }
}
