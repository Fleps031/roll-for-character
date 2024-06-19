/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharacterSheetStatInputCardComponentComponent } from './character-sheet-stat-input-card-component.component';

describe('CharacterSheetStatInputCardComponentComponent', () => {
  let component: CharacterSheetStatInputCardComponentComponent;
  let fixture: ComponentFixture<CharacterSheetStatInputCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetStatInputCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetStatInputCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
