import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-bill',
  templateUrl: './customer-bill.component.html',
  styleUrls: ['./customer-bill.component.css']
})
export class CustomerBillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    this.loadScript('../../assets/min.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
