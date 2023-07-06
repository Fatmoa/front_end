import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from './../../../services/items.service';
import { Component } from '@angular/core';

export class Items{
  id:any
  item_name:any
  received:any
  qty:any

}


@Component({
  selector: 'app-edititems',
  templateUrl: './edititems.component.html',
  styleUrls: ['./edititems.component.css']
})
export class EdititemsComponent {
  itermEditForm!:FormGroup;
  constructor(private itemsService: ItemsService,
    private router: Router,
    private routes:ActivatedRoute,
    private route:ActivatedRoute){


  }
  id:any
  ngOnInit(): void {
    this.configureEditForm();
    this.route.params.subscribe((paramValue:any)=>{

      const item = paramValue.itermID;
      //console.log(item);
      this.getById(item);


    })
  }

  configureEditForm(){
    this.itermEditForm = new FormGroup({
      id:new FormControl(),
      item_name:new FormControl(null,Validators.required),
      received:new FormControl(null,Validators.required),
      qty:new FormControl(null,Validators.required),
    })
  }


  getById(itermID:any){
    // console.log(itermID);
this.itemsService.getById(itermID).subscribe((res:any)=>{
  //console.log(res);

  Object.keys(res).forEach(key=>{
    if(this.itermEditForm.value.hasOwnProperty(key)){
      this.itermEditForm.get(key)?.setValue(res[key]);
    }
  })

})
  }


  onEdit(){
    const id = this.itermEditForm.value.id;
    const values = this.itermEditForm.value;

    this.itemsService.update(id,values).subscribe((response:any)=>{
     // console.log("edited =>",response);
     this.router.navigateByUrl('viewitems');

    })
  }

}
