import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abandoned-cart',
  templateUrl: './abandoned-cart.component.html',
  styleUrls: ['./abandoned-cart.component.css'],
})
export class AbandonedCartComponent implements OnInit {
  startDateCart!: string;
  endDateCart!: string;
  cart!: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  searchCart() {
    let start = (document.querySelector('#startDateCart') as HTMLInputElement)
      .value;
    let end = (document.querySelector('#endDateCart') as HTMLInputElement)
      .value;
    let url = 'http://localhost:8000/api/cart/' + start + '/to/' + end;
    this.http.get(url).subscribe((cart) => {
      // console.log(user);
      this.cart = cart;
      console.log(this.cart);
    });
    // console.log(start);
    // console.log(end);
  }
}
