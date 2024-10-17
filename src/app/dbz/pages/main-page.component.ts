import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponentDbz {
  constructor(private _dbzService: DbzService) {}
  get characters(): Character[] {
    return [...this._dbzService.characters];
  }
  deleteCharacter(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }
  addCharacter(character: Character) {
    this._dbzService.onNewCharacter(character);
  }
}
