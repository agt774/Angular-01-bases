import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'personajes-list-personajes',
  templateUrl: './list-personajes.component.html',
})

export class ListPersonajes {

  listName = input.required <string> ();
  personajes = input.required <Personaje[]> ();

}
