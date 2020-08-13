import { Component } from '@angular/core';
import { MkwList } from 'mkw-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: MkwList[] = [
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
}
