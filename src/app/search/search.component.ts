import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  db: any[] = [];
  selectedImage: { image: string; name: string; date: number } | null = null;
  movies: any[] = [];
  series: any[] = [];
  TvShow: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}

  searchTerm: string = '';
  data: any[] = [];
  filteredData: any[] = [];

  activeTab: string = 'movies';

  ngOnInit() {
    this.http.get<any[]>('assets/data/db.json').subscribe((res) => {
      this.data = res;

      this.route.queryParams.subscribe((params) => {
        this.searchTerm = params['q'] || '';

        const results = this.data.filter((item) =>
          Object.values(item).some((value) =>
            value
              ?.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()),
          ),
        );

        this.movies = results.filter((item) => item.title === 'Movies');
        this.series = results.filter((item) => item.title === 'Series');
        this.TvShow = results.filter((item) => item.title === 'Tv-Show');

        // Auto select tab فيها نتائج
        if (this.movies.length) this.activeTab = 'movies';
        else if (this.series.length) this.activeTab = 'series';
        else if (this.TvShow.length) this.activeTab = 'tv';
      });
    });
  }

  openPage(item: any) {
    this.router.navigate(['/details', item.id]);
  }
}
