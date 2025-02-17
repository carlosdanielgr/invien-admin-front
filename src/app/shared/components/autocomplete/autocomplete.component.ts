import { Component, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
  Observable,
  OperatorFunction,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  @Input() label: string = 'Buscar...';

  @Input() data: string[] = [];

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  model: string = '';

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === ''
          ? this.data
          : this.data.filter(
              (v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
            )
        ).slice(0, 10)
      )
    );
  };
}
