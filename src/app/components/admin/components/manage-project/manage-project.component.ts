import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Advisor } from '@shared/project.interface';
import { AdvisorService } from '@shared/services/advisor.service';

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

  constructor(
    private readonly fb: FormBuilder,
    private readonly advisorService: AdvisorService
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
      measure: ['', Validators.required],
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
      advisor: ['', Validators.required],
      pdf: ['', Validators.required],
      images: [[], Validators.required],
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

  onSaveProject(): void {
    console.log(this.form.value);
  }

  onFilePdfChange(event: any): void {
    this.form.get('pdf')?.setValue(event.target.files[0]);
  }

  onFileImagesChange(event: any): void {
    console.log(event.target.files);

    // this.form.get('images')?.setValue(event.target.files);
  }

  get amenitiesEs(): FormArray {
    return this.form.get('amenities_es') as FormArray;
  }

  get amenitiesEn(): FormArray {
    return this.form.get('amenities_en') as FormArray;
  }
}
