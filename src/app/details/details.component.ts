import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  selectedImage: any;
  selectedGallery: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // Load JSON data
    this.http.get<any[]>('assets/data/db.json').subscribe(data => {

      const item = data.find(i => i.id == Number(id));
      if (item) {
        this.selectedImage = item;
        this.selectedGallery = item.gallery;
        // console.log('Details item:', this.selectedImage);
        // console.log(item.id);
      }

    });
  }

}
