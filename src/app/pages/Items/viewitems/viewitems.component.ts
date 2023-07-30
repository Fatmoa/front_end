
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdditemsComponent } from '../additems/additems.component';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent{
  constructor(private router:Router, private itemservice: ItemsService){

  }
  ngOnInit(): void {
    this.getAll();
     this.getSum()
  }
  onAdd(){
    this.router.navigateByUrl('/additems')
    }


  update(item:any){
    this.router.navigateByUrl('edititems/'+ item.id);
  }
  onDelete(id:any){
    this.itemservice.deleteById(id).subscribe((resp:any)=>{
      this.ngOnInit();
    })

  }
  onClick(event:any){
    console.log(event.target.value)
    this.itemservice.getByName(event.target.value).subscribe((resp:any)=>{
      console.log(resp);
      this.items_data=resp;
    })

  }


  items_data:any
   qty_count:any
  getAll(){
    this.itemservice.getAll().subscribe((resp:any)=>{
      console.log(resp);
      this.items_data=resp;
    })
  }

  getSum(){
    this.itemservice.getSum().subscribe((resp:any)=>{
      console.log(resp);
      this.qty_count=resp;
    })
  }
}
