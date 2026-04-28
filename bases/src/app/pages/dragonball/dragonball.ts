import { CharacterAdd } from './../../components/dragonball/character-add/character-add';
import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballService } from '../../services/dragonball.services';

@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballPage {
    public dragonballService = inject(DragonballService)
}
