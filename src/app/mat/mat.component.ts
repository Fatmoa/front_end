import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-mat',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent {
  @Input() title!:string;
  @Input() subtitle!:string;
}


