import { Component, OnInit, Input } from '@angular/core';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-character-sheet-input-box',
  templateUrl: './character-sheet-input-box.component.html',
  styleUrls: ['./character-sheet-input-box.component.css'],
  standalone: true,
  imports: [
    NgIf
  ]
})
export class CharacterSheetInputBoxComponent implements OnInit {

  @Input() inputBoxWidth!: string;
  @Input() inputBoxHeight!: string;
  @Input() inputBoxInnerTitle!: string;
  @Input() inputBoxType!: string;

  constructor() { }

  ngOnInit() {
  }

}
