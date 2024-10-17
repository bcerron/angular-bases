import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponentDbz } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list.component';
import { AddCharacterDbzComponent } from './components/add-character-dbz/add-character-dbz.component';

@NgModule({
  declarations: [
    MainPageComponentDbz,
    DbzListComponent,
    AddCharacterDbzComponent,
  ],
  exports: [MainPageComponentDbz],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
