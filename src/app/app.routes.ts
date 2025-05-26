import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ChildAComponent } from './pages/child-a/child-a.component';
import { ChildBComponent } from './pages/child-b/child-b.component';

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
        path: '',
        redirectTo: 'child-a',
        pathMatch: 'full',
      },
    ],
  },
];
