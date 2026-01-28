import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component ( {

    imports: [ UpperCasePipe],
    templateUrl : './heroe.component.html',

  } )

export class HeroeComponent {

  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  heroeDescripcion = computed(() => {

    const description = `${ this.nameSignal } - ${ this.ageSignal}`;
    return description;

  })

  capitalizedName = computed( () => this.nameSignal() )

  heroeDescription () : string {

    return `${this.nameSignal()} - ${this.ageSignal()}`;

  }

  changeHeroeAge () {

    this.nameSignal.set('Spiderman');
    this.ageSignal.set(22);

  }

  changeAge () {

    this.ageSignal.set(60);

  }

  resetForm () {

    this.nameSignal.set('Ironman');
    this.ageSignal.set(45);

  }

}
