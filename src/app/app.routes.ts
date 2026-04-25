import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tacitus-card-printer',
    loadComponent: () => import('tacitus-card-printer').then(m => m.CardPrinterComponent)
  }
];
