import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

import { environment } from '@environment/environment';
import { AdvisorService } from '@shared/services/advisor.service';
import {
  Advisor,
  OriginalData,
  Type,
} from '@shared/interfaces/project.interface';
import { ProjectService } from '@shared/services/project.service';
import { errorFn } from '@shared/functions/errors.function';
import { Locations } from '@shared/interfaces/location.interface';

@Component({
  selector: 'app-manage-project',
  standalone: true,
  imports: [ReactiveFormsModule, NgxEditorModule],
  templateUrl: './manage-project.component.html',
  styleUrl: './manage-project.component.scss',
})
export class ManageProjectComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  advisors: Advisor[] = [];

  types: Type[] = [];

  locations: Locations = {
    countries: [],
    states: [],
    towns: [],
  };

  listFiles: string[] = [];

  filesToDelete: string[] = [];

  project: Partial<OriginalData> = {};

  editor: Editor[] = [new Editor(), new Editor(), new Editor(), new Editor()];

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  loading = false;

  isEdit = false;

  constructor(
    private readonly fb: FormBuilder,
    private readonly advisorService: AdvisorService,
    private readonly projectService: ProjectService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.formInit();
    this.getAdvisors();
    this.getLocations();
    this.getTypes();
    this.isEdit = this.router.url === '/admin/project-edit';
    if (this.isEdit) this.editProject();
  }

  ngOnDestroy(): void {
    this.editor.forEach((e) => e.destroy());
  }

  private editProject(): void {
    this.project = history.state;
    const { images, amenities_en, amenities_es, ...data } = this
      .project as OriginalData;
    this.form.patchValue({
      ...data,
      countryId: data.country.id,
      stateId: data.state.id,
      townId: data.town.id,
      typeId: data.type.id,
    });
    amenities_en.forEach((v) => this.amenitiesEn.push(new FormControl(v)));
    amenities_es.forEach((v) => this.amenitiesEs.push(new FormControl(v)));
    this.listFiles = images.map(
      (i: string) => `${environment.apiUrl}uploads/images/${i}`,
    );
  }

  private getAdvisors(): void {
    this.advisorService.getAllAdvisors().subscribe({
      next: (res) => {
        this.advisors = res.data;
      },
    });
  }

  private getLocations(): void {
    this.projectService.getLocations().subscribe({
      next: (res) => {
        this.locations = res;
      },
    });
  }

  private getTypes(): void {
    this.projectService.getTypes().subscribe({
      next: (res) => {
        this.types = res;
      },
    });
  }

  private formInit(): void {
    this.form = this.fb.group({
      name_es: ['', Validators.required],
      name_en: ['', Validators.required],
      countryId: ['', Validators.required],
      stateId: ['', Validators.required],
      townId: ['', Validators.required],
      typeId: ['', Validators.required],
      description_es: ['', Validators.required],
      description_en: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['', Validators.required],
      built_size: ['', Validators.required],
      total_size: ['', Validators.required],
      rooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      garage: ['', Validators.required],
      details_es: ['', Validators.required],
      details_en: ['', Validators.required],
      amenities_es: this.fb.array([], Validators.required),
      amenities_en: this.fb.array([], Validators.required),
      url_video: [''],
      url_map: ['', Validators.required],
      location_es: ['', Validators.required],
      location_en: ['', Validators.required],
      advisorId: ['', Validators.required],
      is_for: ['', Validators.required],
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
    if (this.isEdit)
      this.filesToDelete = [
        ...this.filesToDelete,
        this.listFiles[index].split('/').pop()!,
      ];
    this.listFiles.splice(index, 1);
    this.form.get('images')?.setValue(images);
  }

  handleProject() {
    if (this.isEdit) this.onEditProject();
    else this.onSaveProject();
  }

  private onSaveProject(): void {
    const body = this.handleFormData(this.form.value);
    this.loading = true;
    this.projectService.postCreateProject(body).subscribe({
      next: () => {
        this.projectService.newSubscribeToProjects();
        this.router.navigate(['admin']);
      },
      error: () => {
        this.loading = false;
        errorFn('Error al crear el proyecto');
      },
    });
  }

  private onEditProject(): void {
    const data: any = {};
    const { images, amenities_en, amenities_es, ...form } = this.form.value;
    Object.keys(form).forEach((key) => {
      if (
        key === 'countryId' ||
        key === 'stateId' ||
        key === 'townId' ||
        key === 'typeId'
      ) {
        const keyLocation = key.slice(0, -2) as
          | 'country'
          | 'state'
          | 'town'
          | 'type';
        if (form[key] !== this.project[keyLocation]?.id) data[key] = form[key];
      } else if (form[key] !== this.project[key as keyof OriginalData])
        data[key] = form[key];
    });
    if (images.length) data.images = images;
    if (this.filesToDelete.length) data.filesToDelete = this.filesToDelete;

    const validContentArray = (arr1: string[], arr2: string[]) => {
      const strArr1 = JSON.stringify(arr1);
      const strArr2 = JSON.stringify(arr2);
      return strArr1 !== strArr2;
    };

    if (validContentArray(amenities_en, this.project.amenities_en as string[]))
      data.amenities_en = amenities_en;
    if (validContentArray(amenities_es, this.project.amenities_es as string[]))
      data.amenities_es = amenities_es;

    const body = this.handleFormData(data);
    this.loading = true;
    this.projectService
      .patchUpdateProject(body, this.project.id as string)
      .subscribe({
        next: () => {
          this.projectService.newSubscribeToProjects();
          this.router.navigate(['admin']);
        },
        error: () => {
          this.loading = false;
          errorFn('Error al editar el proyecto');
        },
      });
  }

  private handleFormData(data: Record<string, any>): FormData {
    const body = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === 'images')
        data[key].forEach((image: any) => body.append(key, image));
      else if (
        key === 'amenities_es' ||
        key === 'amenities_en' ||
        key === 'filesToDelete'
      )
        body.append(key, JSON.stringify(data[key]));
      else body.append(key, data[key]);
    });
    return body;
  }

  get amenitiesEs(): FormArray {
    return this.form.get('amenities_es') as FormArray;
  }

  get amenitiesEn(): FormArray {
    return this.form.get('amenities_en') as FormArray;
  }
}
