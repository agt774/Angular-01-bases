import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'personajes-personaje-add',
  templateUrl: './add-personaje.component.html',
})

export class AddPersonaje {

  name = signal('');
  power = signal(0);
  newPersonaje = output <Personaje> ();

  addPersonaje () {

    if (! this.name() || ! this.power() || this.power() < 0) {
       return;
    }

    const personajeNew: Personaje = {

      id: Math.floor(Math.random()*1000),
      name: this.name(),
      power: this.power(),

    }

    this.newPersonaje.emit(personajeNew);

    this.reset();

  }

  reset () {

    this.name.set('');
    this.power.set(0);
  }

}
