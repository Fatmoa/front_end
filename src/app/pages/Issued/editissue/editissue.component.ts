import { IssueService } from './../../../services/issue.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-editissue',
  templateUrl: './editissue.component.html',
  styleUrls: ['./editissue.component.css']
})
export class EditissueComponent {
  issueEditForm!: FormGroup;
  constructor (private issueService: IssueService,
    private router: Router,
    private routes: ActivatedRoute,
    private route: ActivatedRoute ){

  }
id:any
ngOnInit(): void {
 this.configForm();
 this.route.params.subscribe((paramValue:any)=>{
  const issue = paramValue.issueID;
  this.getById(issue);
 })

}
configForm(){
  this.issueEditForm= new FormGroup({
    id:new FormControl(),
    item_name:new FormControl(null,Validators.required),
    qnty:new FormControl(null,Validators.required),
    responsive:new FormControl(null,Validators.required),
    role:new FormControl(null,Validators.required),
  })
}
getById(issueID:any){
  this.issueService.getById(issueID).subscribe((res:any)=>{
    Object.keys(res).forEach(key=>{
      if(this.issueEditForm.value.hasOwnProperty(key)){
        this.issueEditForm.get(key)?.setValue(res[key]);
      }
    })
  }
  )
}


  onSave(){
    const id = this.issueEditForm.value.id;
    const values = this.issueEditForm.value;
    this.issueService.update(id,values).subscribe((response:any)=>{
      this.router.navigateByUrl('viewissue');

    })

  }

}






