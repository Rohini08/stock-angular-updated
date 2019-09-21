import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  displaylist:any[]=[
  {
    company_name: 'Company 1 Pvt. Ltd',
    stock_ex: 'BSE',
    about: 'Lorem ipsum dolores'
  },
  {
    company_name: 'Company 2 Pvt. Ltd',
    stock_ex: 'NSE',
    about: 'Lorem ipsum dolores'
  },


];

  constructor() { }

  ngOnInit() {
  }

}
