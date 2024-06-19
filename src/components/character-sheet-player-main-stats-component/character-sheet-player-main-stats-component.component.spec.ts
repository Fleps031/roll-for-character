/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharacterSheetPlayerMainStatsComponentComponent } from './character-sheet-player-main-stats-component.component';

describe('CharacterSheetPlayerMainStatsComponentComponent', () => {
  let component: CharacterSheetPlayerMainStatsComponentComponent;
  let fixture: ComponentFixture<CharacterSheetPlayerMainStatsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetPlayerMainStatsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetPlayerMainStatsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
