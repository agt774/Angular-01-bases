import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PersonajesSuperComponent } from './pages/personajes-super/personajes-super.component';

export const routes: Routes = [

  {
    path : '',
    component : CounterComponent,
  },
  {
    path : 'heroe',
    component : HeroeComponent,
  },
  {
    path : 'personajes',
    component : PersonajesComponent,
  },
  {
    path : 'personajes-super',
    component : PersonajesSuperComponent,
  },

];
