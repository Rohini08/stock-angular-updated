import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  stockForm : FormGroup  ;
 submitted = false;

  constructor(private _location: Location,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.stockForm = this.formBuilder.group({
      
      stockName: ['',[Validators.required]],
      aboutStock: ['',[Validators.required]],
      address:['',[Validators.required]],
      });
      
  }
  resetForm(stockform: FormGroup) {
		stockform.reset();
  }
  get f() { return this.stockForm.controls; }

  onSubmit(){
   
    this.submitted = true;
    if (this.stockForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.stockForm.value))
 

  }

  backClicked() {
    this._location.back();
  }

}
