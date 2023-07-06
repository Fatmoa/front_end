import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';


export class Issued{
  id:any
  item_name:any
  qnty:any
  responsive:any
  role:any
}

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.css']
})
export class AddissueComponent {
 

}
