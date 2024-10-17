import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharacterDbzComponent } from './add-character-dbz.component';

describe('AddCharacterDbzComponent', () => {
  let component: AddCharacterDbzComponent;
  let fixture: ComponentFixture<AddCharacterDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCharacterDbzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCharacterDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
