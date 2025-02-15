import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { errorFn } from '@shared/functions/errors.function';
import { Advisor } from '@shared/interfaces/project.interface';
import { AdvisorService } from '@shared/services/advisor.service';

interface AdvisorForm extends Omit<Advisor, 'id'> {}

@Component({
  selector: 'app-manage-advisor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './manage-advisor.component.html',
  styleUrl: './manage-advisor.component.scss',
})
export class ManageAdvisorComponent implements OnInit {
  @Input() advisor: Advisor | null = null;

  form: FormGroup<Record<keyof AdvisorForm, FormControl>> = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    role_es: new FormControl('', Validators.required),
    role_en: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalService: NgbModal,
    private readonly advisorService: AdvisorService
  ) {}

  ngOnInit(): void {
    if (this.advisor) {
      this.form.patchValue(this.advisor);
    }
  }

  onImagesChange(event: any) {
    this.form.get('image')?.setValue(event.target.files[0]);
  }

  onSubmit() {
    if (!this.advisor) {
      this.addAdvisor();
    }
  }

  private addAdvisor() {
    const body = new FormData();
    const data = this.form.value;
    Object.keys(data).forEach((key) => {
      body.append(key, data[key as keyof AdvisorForm]);
    });
    this.advisorService.postAdvisor(body).subscribe({
      next: () => {
        this.modalService.dismissAll('reload');
      },
      error: () => {
        errorFn('Error al crear el asesor');
      },
    });
  }
}
