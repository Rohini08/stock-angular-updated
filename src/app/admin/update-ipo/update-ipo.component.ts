import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  allExchanges: any = ['BSE', 'NSE', 'NASDAQ', 'NYSE'];
  ipoForm : FormGroup  ;
 submitted = false;
  
 constructor(private formBuilder: FormBuilder) {
  
    
    
}

  ngOnInit() {
    this.ipoForm = this.formBuilder.group({
      
      companyName: ['',[Validators.required]],
      price: ['',[Validators.required]],
      address:['',[Validators.required]],
      noOfShares:['',[Validators.required]],
      date: ['',[Validators.required]],
      stockExchange: [null,[Validators.required]],
    
      });
  }

  changeStock(e) {
    this.ipoForm.controls['stockExhange'].setValue(e.target.value, {
      onlySelf: true
    })
  }

  resetForm(addform: FormGroup) {
		addform.reset();
  }
  get f() { return this.ipoForm.controls; }

  onSubmit(){
   
    this.submitted = true;
    if (this.ipoForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ipoForm.value))
 

  }

}
