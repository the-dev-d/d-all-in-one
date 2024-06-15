import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlocktextComponent } from '../../components/blocktext/blocktext.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    CommonModule,
	  BlocktextComponent
  ],
  templateUrl: './homescreen.component.html',
  styleUrl: './homescreen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeScreenComponent {

	name = ['<-', ' ', ..."<the-dev-d>".split(''), ' ', '->']

}
