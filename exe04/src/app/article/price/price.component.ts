import { Component, OnInit, Input } from '@angular/core';
import { Price } from './price.model';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  @Input() price:Price;
  constructor() { }

  ngOnInit() {
  }

}
