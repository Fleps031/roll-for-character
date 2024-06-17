/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharacterSheetPlayerBioComponentComponent } from './character-sheet-player-bio-component.component';

describe('CharacterSheetPlayerBioComponentComponent', () => {
  let component: CharacterSheetPlayerBioComponentComponent;
  let fixture: ComponentFixture<CharacterSheetPlayerBioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetPlayerBioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetPlayerBioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
