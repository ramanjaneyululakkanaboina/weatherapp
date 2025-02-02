import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='weather app';
  city:string='';
  dcity:string='';
  name:string='';
  temp_c:Number= 0 ;
  wind:string='';
  preassure:string='';
  humididty:string='';
  img:string=''
  text:string=''
  setcity(event:any){
    this.city=event.target.value
  }
 
  checkweather(){
    this.dcity=this.city
    let v:any = document.getElementById('inp')
    v.value=''
    this.city=''
    fetch(`https://api.weatherapi.com/v1/current.json?key=f692bf9c69dc4e72bd0102100250202&q='${this.dcity}'`)
    .then((response)=>response.json())
    .then((data)=>{
      this.name=data.location.name
      this.temp_c= data.current.temp_c 
      this.wind='Wind: '+ data.current.wind_kph + ' kmph'
      this.preassure='Preassure: '+ data.current.pressure_mb+' mb'
      this.humididty='Humidity: '+data.current.humidity+ ' %'
      this.img=data.current.condition.icon
      this.text=data.current.condition.text
    })
  }
 
}
