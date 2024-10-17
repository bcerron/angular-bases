import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character-dbz.component.html',
  styleUrl: './add-character-dbz.component.css',
})
export class AddCharacterDbzComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    if (this.character.power < 0) return;

    this.onNewCharacter.emit({ ...this.character });

    this.character.id = uuid();
    this.character.name = '';
    this.character.power = 0;
  }
}
