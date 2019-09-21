import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder,Validators  } from '@angular/forms';

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  allExchanges: any = ['BSE', 'NSE', 'NASDAQ', 'NYSE'];
  allSector: any = ['IT', 'infotainment', 'Finance', 'Real-estate'];
 addForm : FormGroup  ;
 submitted = false;
 
  
  constructor(private _location: Location,private formBuilder: FormBuilder) {
    
    
   }
    ngOnInit() {
  this.addForm = this.formBuilder.group({
      
    companyName: ['',[Validators.required]],
    turnover: ['',[Validators.required]],
    CEO:['',[Validators.required]],
    boardOfDirector:['',[Validators.required]],
    aboutCompany: ['',[Validators.required]],
    stockExchange: [null,[Validators.required]],
    sector: [null,[Validators.required]],
    });
    
  }
  

  changeStock(e) {
    this.addForm.controls['stockExhange'].setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeSector(e) {
    this.addForm.controls['sector'].setValue(e.target.value, {
      onlySelf: true
    })
  } 
  resetForm(addform: FormGroup) {
		addform.reset();
  }
  get f() { return this.addForm.controls; }

  onSubmit(){
   
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value))
 

  }
  backClicked() {
    this._location.back();
  }
  
  
}