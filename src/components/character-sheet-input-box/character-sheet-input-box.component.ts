import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() inputBoxInputWidth!: string;
  @Input() inputBoxPlaceholder!: string;

  @Output() focusOut: EventEmitter<string>



  validKeyValues!: string[];
  isInputTextSelected!: boolean;
  charCount = 0;

  constructor() {
    this.validKeyValues = [
      'Backspace',
      'Delete',
      'ArrowLeft',
      'ArrowRight',
      'Tab',
    ];

    if(this.inputBoxPlaceholder === undefined){
      this.inputBoxPlaceholder = ''
    }

    this.focusOut = new EventEmitter<string>()


  }

  ngOnInit() {
    console.log(this.inputBoxId+this.inputBoxWidth)
  }

  checkTextSelection(): void{
   if(window.getSelection()?.toString() != ""){
    this.isInputTextSelected = true;
   }


  }
  enforceMinMax(event: KeyboardEvent): void{
    const currentInput = (document.querySelector('#'+ this.inputBoxId) as HTMLInputElement)
    const currentInputValue = currentInput?.value

    this.checkTextSelection();

    if(!this.validKeyValues.includes(event.key) && !this.isInputTextSelected && !event.ctrlKey){

      if(currentInputValue.length >= this.maxInputLength){
        event.preventDefault();
      }
      else{
        this.charCount++
        console.log(this.charCount)
      }
    }

    this.isInputTextSelected = false;

  }

  onFocusOut(): void{
    console.log('focus out')
    const currentInput = (document.querySelector('#'+ this.inputBoxId) as HTMLInputElement)
    const currentInputValue = currentInput?.value
    if(currentInputValue != undefined){
      this.focusOut.emit(currentInputValue)
    }
  }

}
