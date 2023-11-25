import { Component } from '@angular/core';
import { GetApiDataService } from './get-api-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Abhishek ';
  counter = 0;
  apiData:any[]=[]
  name="name"

  getApiData(){
    this.dataService.getApidata().subscribe((res)=>{
      this.apiData=res
      console.log(this.apiData);
    })
  }

  increment() {
    console.log('increment');

    if (this.counter === 10) {
      alert('max value is reached');
    } else {
      this.counter++;
    }
  }

  decrement() {
    console.log('decrement');

    if (this.counter > 1) {
      this.counter--;
    } else {
      return;
    }
  }

  constructor( private dataService:GetApiDataService) {
    setTimeout(() => {
      this.title = 'Delay - Abhishek ';
    }, 2000);
  }
}
