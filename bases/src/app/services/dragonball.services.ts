import { Injectable, effect, signal } from "@angular/core";
import type { Character } from "../interfaces/character.interface";

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');
  if (characters) {
    return JSON.parse(characters);
  }
  return [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
    characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update((characters) => [...characters, character]);
  }
} 