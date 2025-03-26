import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '@environment/environment';
import { Property } from '@shared/interfaces/property.interface';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss',
})
export class PropertyDetailComponent implements OnInit {
  project!: Property;

  apiUrl = `${environment.apiUrl}uploads/`;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.project = history.state;
    if (this.project.url_video)
      this.project.url_video = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.project.url_video
      ) as string;
    this.project.url_map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.project.url_map
    ) as string;
  }
}
