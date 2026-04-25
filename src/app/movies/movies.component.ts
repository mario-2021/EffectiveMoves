import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [FormsModule, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  db: any[] = [];
  selectedImage: { image: string; name: string; date: number } | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/db.json').subscribe({
      next: (data) => {
        this.db = data.filter((item) => item.title === 'Movies');
      },
      error: (err) => console.error(err),
    });
  }

  openPopup(item: any) {
    this.selectedImage = item;
  }

  closePopup() {
    this.selectedImage = null;
  }

  openPage(selectedImage: any) {
    const url =
      selectedImage.url || this.router.navigate(['/details', selectedImage.id]);
  }
}
