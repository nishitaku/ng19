import { Routes } from '@angular/router';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';

export const routes: Routes = [
  {
    path: 'child-a',
    component: ChildAComponent,
    data: {
      reuseComponent: true,
    },
  },
  {
    path: 'child-b',
    component: ChildBComponent,
    data: {
      reuseComponent: true,
    },
  },
  {
    path: '',
    redirectTo: 'child-a',
    pathMatch: 'full',
  },
];
