import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Advisor } from '@shared/interfaces/project.interface';

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

  ngOnInit(): void {
    if (this.advisor) {
      this.form.patchValue(this.advisor);
    }
  }

  onImagesChange(event: any) {
    this.form.get('image')?.setValue(event.target.files[0]);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
