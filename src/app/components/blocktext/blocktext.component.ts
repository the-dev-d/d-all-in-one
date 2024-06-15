import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, input } from '@angular/core';

@Component({
  selector: 'block-text',
  standalone: true,
  imports: [],
  templateUrl: './blocktext.component.html'
})
export class BlocktextComponent {
  text = input.required<string[]>();

}
