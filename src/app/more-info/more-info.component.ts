import { Component, Input } from '@angular/core';
import { Item } from '../items';


@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {
  @Input() product!:Item;
  buy(item:string){
    window.alert("You have bought the " + item);
  }
}
