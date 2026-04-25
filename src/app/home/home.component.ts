import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  db : any[] = [];
  selectedImage: { image: string; name: string; date: number; } | null = null;
  effectiveMovies = "assets/img/effectivemovies.jpg";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.http.get<any[]>("assets/data/db.json").subscribe(data => {
      this.route.url.subscribe(url => {
        const path = url[0]?.path;
        if (path === 'Movies') {
          this.db = data.filter(item => item.title === 'Movies');
        } else {
          this.db = data;
        }
      })
    })
  }

  openPopup(item: any) {
    this.selectedImage = item;
  }

  closePopup() {
    this.selectedImage = null;
  }

  openPage(selectedImage: any) {
  // example: open Google in a new tab
  // or use item.url if your JSON has a URL field
  const url = selectedImage.url ||
  this.router.navigate(['/details', selectedImage.id]);
  // window.open(url, '_blank');  // opens in new tab
  }

}
