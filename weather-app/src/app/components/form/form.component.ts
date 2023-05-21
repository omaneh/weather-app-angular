import { Component, OnInit} from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { WeatherService } from 'services/weather.service';
import { Weather } from 'src/Weather';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
zipcode!: number;
weather!: Weather;
validZipcode: boolean = false;

constructor(private weatherService: WeatherService) {}

ngOnInit(){
}

storeZip()
{
  if(this.isValid(this.zipcode)) {
    this.returnWeather();
  }
  else {
    alert("That is not valid. Please enter a valid 5-digit American postal code");
  }

}

isValid(zip: number): boolean {
  if(zip.toString().trim().length === 5) {
    this.validZipcode = true;
    return true;
  }
  return false;
}

returnWeather(): void{
this.weatherService.getWeather(this.zipcode).subscribe(weather => (this.weather = weather));
}

}
