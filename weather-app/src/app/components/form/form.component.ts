import { withInterceptors } from '@angular/common/http';
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
zipcode!: string;
weather!: Weather;
validZipcode: boolean = false;
imagePaths: any[] = ['../../../assets/sunny.jpg', '../../../assets/sunny_with_clouds.jpg', '../../../assets/cloudy.jpg', '../../../assets/rainy.jpg'];
currentImageName!: string;
currentImagePath: string = '../../../assets/white.jpg';

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

isValid(zip: string): boolean {
  if(zip.toString().trim().length === 5) {
    this.validZipcode = true;
    return true;
  }
  return false;
}
  async returnWeather(): Promise<void>{
    this.weatherService.getWeather(this.zipcode).subscribe(
      (weather) => {
        this.weather = weather;
  
        if (this.weather.cloud_pct > 10 && this.weather.temp > 20) {
          this.currentImagePath = this.imagePaths[0];
          this.currentImageName = "Sunny";
        }
        if (this.weather.cloud_pct > 30 && this.weather.temp >= 15) {
          this.currentImagePath = this.imagePaths[1];
          this.currentImageName = "Sunny with Clouds";
        }
        if (this.weather.cloud_pct > 60) {
          this.currentImagePath = this.imagePaths[0];
          this.currentImageName = "Cloudy";
        }
        if (this.weather.cloud_pct > 85) {
          this.currentImagePath = this.imagePaths[3];
          this.currentImageName = "Rainy";
        }
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
convertF() {
  this.weather.temp = (this.weather.temp * 9/5) + 32
  this.weather.feels_like = (this.weather.feels_like * 9/5) + 32
  this.weather.min_temp = (this.weather.min_temp * 9/5) + 32

}

convertC() {
  this.weather.temp = (this.weather.temp - 32) * 5/9;
  this.weather.feels_like = (this.weather.feels_like - 32) * 5/9;
  this.weather.min_temp = (this.weather.min_temp - 32) * 5/9;
}

}
