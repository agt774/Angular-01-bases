import { PersonajesService } from './../../services/personajes.service';
import { Component, inject } from '@angular/core';
import { ListPersonajes } from '../../components/personajes/list-personajes/list-personajes.component';
import { AddPersonaje } from '../../components/personajes/add-personaje/add-personaje.component';

@Component({

  templateUrl: 'personajes-super.component.html',
  imports: [ListPersonajes, AddPersonaje],

})

export class PersonajesSuperComponent {
[x: string]: any;

   public personajesService = inject(PersonajesService);

}
