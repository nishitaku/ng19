import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';
import { ChildCComponent } from './pages/child-c/child-c.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
      {
        path: 'child-c',
        component: ChildCComponent,
      },
      {
        path: '',
        redirectTo: 'child-a',
        pathMatch: 'full',
      },
    ],
  },
];
