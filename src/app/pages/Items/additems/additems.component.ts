import { ItemsService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export class Items{
  id:any
  item_name:any
  received:any
  qty:any
}

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent {

itermForm!:FormGroup;
  constructor(private itemsService:ItemsService,private route: Router){

  }
  ngOnInit(): void {
    this.configureItermForm();
  }
  Items_model:Items = new Items()


addItems(data:any){
  return this.itemsService.post(data).subscribe(
    resp=>{
      console.log(resp)
      this.route.navigate(['/viewitems'])

    }
  )

}
 onSave(){
  const values = this.itermForm.value
  this.itemsService.post(values).subscribe((resp:any)=>{
    this.route.navigateByUrl('viewitems');
})

 }
configureItermForm(){
this.itermForm = new FormGroup({
  item_name:new FormControl(null,Validators.required),
  received:new FormControl(null,Validators.required),
  qty:new FormControl(null,Validators.required),
})
}

onReset(){
  this.itermForm.reset();
}
}
