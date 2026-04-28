import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';
import { CharacterAdd } from '../character-add/character-add';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  standalone: true,
})
export class CharacterList {
  listName = input.required<string>();
  characters = input.required<Character[]>()
}
