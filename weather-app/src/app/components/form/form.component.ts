import { Component, OnInit} from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
zipcode!: number;

constructor() {}

ngOnInit(){
}

storeZip(zip: number)
{
  if(this.isValid(zip)) {
    this.zipcode = zip;
  }
  else {
    alert("That is not valid. Please enter a valid 5-digit American postal code");
  }

}

isValid(zip: number): boolean {
  if(typeof(zip) === 'number' && zip.toString().length === 5) {
    return true;
  }
  return false;
}


}
