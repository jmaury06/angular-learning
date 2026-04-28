import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Character {
  id?: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super.html',
  imports: [NgClass],
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },
  ]);

  powerClasses(power: number) {
    return {
      'text-danger': power < 10000,
      'text-success': power >= 10000,
    };
  }

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((characters) => [...characters, newCharacter]);
    this.reserFields();
  }

  deleteCharacter(id: number) {
    this.characters.update((characters) => characters.filter((character) => character.id !== id));
  }

  reserFields() {
    this.name.set('');
    this.power.set(0);
  }
}
