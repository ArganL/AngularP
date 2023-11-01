import { Component } from '@angular/core';
import { Item, items } from '../items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [...items];

  moreInfo:Item ={
    name: "",
    description:"",
    image: ""
  }

  buy(item:string){
    window.alert("You have bought the " + item);
  }
  info(product:Item){
    this.moreInfo = product;
  }
}
