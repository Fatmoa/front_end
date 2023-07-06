import { Component } from '@angular/core';
import { AddissueComponent } from '../addissue/addissue.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-viewissue',
  templateUrl: './viewissue.component.html',
  styleUrls: ['./viewissue.component.css']
})
export class ViewissueComponent {
  constructor(private router: Router, private issueService: IssueService ){
    // this.issueService.Listen().subscribe((res:any)=>{
    //   this.getAll();

    // })

  }
  ngOnInit(): void {
    this.getAll()
  }

onDelete(id:any){
  this.issueService.deleteById(id).subscribe((resp:any)=>{
    this.getAll()

  })

}
update(item:any){
  this.router.navigateByUrl('editissue/'+ item.id)



}
onAdd(){
  this.router.navigateByUrl('/addissue')
}
issue_data:any
getAll(){
  this.issueService.getAll().subscribe((resp:any)=>{
    console.log(resp);
    this.issue_data=resp;
  })
}
 }
