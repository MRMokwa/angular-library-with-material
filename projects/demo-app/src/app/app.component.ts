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
    },
    {
      title: 'Segundo',
      description: '#2',
    },
    {
      title: 'Terceiro',
      description: '#3',
    },
  ];
}
