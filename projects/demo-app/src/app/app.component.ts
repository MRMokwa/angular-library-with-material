import { Component } from '@angular/core';

import { MkwList } from 'mkw-list';

import { ThemeService } from './theme.service';

export const DEFAULT_LIST: MkwList[] = [
  {
    title: 'Primeiro',
    description: '#1',
    icon: 'home',
  },
  {
    title: 'Segundo',
    description: '#2',
    icon: 'tune',
  },
  {
    title: 'Terceiro',
    description: '#3',
    icon: 'done',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list = DEFAULT_LIST;
  theme$ = this.themeService.theme$;

  constructor(private themeService: ThemeService) {}

  changeTheme(value: string) {
    this.themeService.change(value);
  }
}
