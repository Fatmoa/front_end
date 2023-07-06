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
 issueForm!:FormGroup;
 constructor (private issueServices: IssueService, private route: Router ){

 }
 ngOnInit(): void {
  this.configureForm();

 }
 configureForm(){
  this.issueForm = new FormGroup({
    item_name:new FormControl(null,Validators.required),
    qnty:new FormControl(null,Validators.required),
    responsive:new FormControl(null,Validators.required),
    role:new FormControl(null,Validators.required),
  })
 }
 onSubmit(){
  const values = this.issueForm.value
  this.issueServices.post(values).subscribe((resp:any)=>{
    this.route.navigateByUrl('viewissue');
})
 }
 onReset(){
  this.issueForm.reset();
 }


}
