import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Personaje {

  id: number;
  name: string;
  power: number;

}

@Component({
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {

  name = signal('');
  power = signal(0);

  characters = signal <Personaje[]> ([

    { id: 1, name: 'Goku', power: 9001 },

  ]);

  powerClasses = computed (() => {

    return { 'text-danger':  true, }

  });

  addCharacter () {

    if (! this.name() || ! this.power() || this.power() < 0) {
       return;
    }

    const newPersonaje: Personaje = {
      id: this.characters().length +1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update((list) =>  [... list, newPersonaje]);

    this.reset();

  }

  reset () {

    this.name.set('');
    this.power.set(0);
  }

}
