import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AdvisorService } from '@shared/services/advisor.service';
import { Advisor } from '@shared/project.interface';
import { ProjectService } from '@shared/services/project.service';

@Component({
  selector: 'app-manage-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './manage-project.component.html',
  styleUrl: './manage-project.component.scss',
})
export class ManageProjectComponent implements OnInit {
  form!: FormGroup;

  advisors: Advisor[] = [];

  listFiles: string[] = [];

  loading = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly advisorService: AdvisorService,
    private readonly projectService: ProjectService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
    this.getAdvisors();
  }

  private getAdvisors(): void {
    this.advisorService.getAllAdvisors().subscribe({
      next: (res) => {
        this.advisors = res;
      },
    });
  }

  private formInit(): void {
    this.form = this.fb.group({
      name_es: ['', Validators.required],
      name_en: ['', Validators.required],
      description_es: ['', Validators.required],
      description_en: ['', Validators.required],
      price: ['', Validators.required],
      built_size: ['', Validators.required],
      total_size: ['', Validators.required],
      rooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      garage: ['', Validators.required],
      details_es: ['', Validators.required],
      details_en: ['', Validators.required],
      amenities_es: this.fb.array([], Validators.required),
      amenities_en: this.fb.array([], Validators.required),
      url_video: ['', Validators.required],
      url_map: ['', Validators.required],
      location_es: ['', Validators.required],
      location_en: ['', Validators.required],
      advisorId: ['', Validators.required],
      pdf: ['', Validators.required],
      images: [[]],
    });
  }

  addAmenity(i18n: string, input: HTMLInputElement): void {
    if (i18n === 'es') this.amenitiesEs.push(new FormControl(input.value));
    else this.amenitiesEn.push(new FormControl(input.value));
    input.value = '';
  }

  removeAmenity(i18n: string, index: number): void {
    if (i18n === 'es') this.amenitiesEs.removeAt(index);
    else this.amenitiesEn.removeAt(index);
  }

  onFilePdfChange(event: any): void {
    this.form.get('pdf')?.setValue(event.target.files[0]);
  }

  onFileImagesChange(event: any): void {
    const images: string[] = this.form.get('images')?.value || [];
    Object.keys(event.target.files).forEach((key) => {
      images.push(event.target.files[key]);
      this.listFiles.push(URL.createObjectURL(event.target.files[key]));
    });
  }

  onRemoveImage(index: number): void {
    const images: string[] = this.form.get('images')?.value || [];
    images.splice(index, 1);
    this.listFiles.splice(index, 1);
    this.form.get('images')?.setValue(images);
  }

  onSaveProject(): void {
    const body = new FormData();
    Object.keys(this.form.value).forEach((key) => {
      if (key === 'images')
        this.form.value[key].forEach((image: any) => body.append(key, image));
      else if (key === 'amenities_es' || key === 'amenities_en')
        body.append(key, JSON.stringify(this.form.value[key]));
      else body.append(key, this.form.value[key]);
    });
    this.loading = true;
    this.projectService.postCreateProject(body).subscribe({
      next: () => {
        this.form.reset();
        this.listFiles = [];
        this.router.navigate(['admin']);
      },
    });
  }

  get amenitiesEs(): FormArray {
    return this.form.get('amenities_es') as FormArray;
  }

  get amenitiesEn(): FormArray {
    return this.form.get('amenities_en') as FormArray;
  }
}
