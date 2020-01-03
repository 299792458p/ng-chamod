import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'chamod-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'chamod.examples.menu.todos' },
    { link: 'stock-market', label: 'chamod.examples.menu.stocks' },
    { link: 'theming', label: 'chamod.examples.menu.theming' },
    { link: 'crud', label: 'chamod.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'chamod.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'chamod.examples.menu.form' },
    { link: 'notifications', label: 'chamod.examples.menu.notifications' },
    { link: 'elements', label: 'chamod.examples.menu.elements' },
    { link: 'authenticated', label: 'chamod.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
