import { getLocaleTimeFormat } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
date = new Date();
month = this.getMonthString(this.date.getMonth() + 1);
day = this.date.getDate();
constructor(){
}

getMonthString(month : number): string
{
  if(month === 1) { return "January";}
  if(month === 2) { return "February";}
  if(month === 3) { return "March";}
  if(month === 4) { return "April";}
  if(month === 5) { return "May";}
  if(month === 6) { return "June";}
  if(month === 7) { return "July";}
  if(month === 8) { return "August";}
  if(month === 9) { return "September";}
  if(month === 10) { return "October";}
  if(month === 11) { return "November";}
  if(month === 12) { return "December";}
  return '';
}
}
