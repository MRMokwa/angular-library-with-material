import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('');
  theme$ = this.theme.asObservable();

  constructor() {}

  change(value: string) {
    this.theme.next(value);
  }
}
