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
  @Input() inputBoxTextAlign!: string;
  @Input() inputBoxId!: string;
  @Input() maxInputLength!: number;

  validKeyValues!: string[]

  constructor() {
    this.validKeyValues = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
    ];
  }

  ngOnInit() {
  }

  enforceMinMax(event: KeyboardEvent): void{
    const currentInput = (document.querySelector('#'+ this.inputBoxId) as HTMLInputElement)
    const currentInputValue = currentInput?.value

    if(!this.validKeyValues.includes(event.key)){
      if(currentInputValue.length >= this.maxInputLength){
        event.preventDefault();
      }
    }

  }

}
