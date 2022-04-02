import { Component, OnInit } from '@angular/core';
import {City} from '../city'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Assignment3- ImageSlider';
  image = "assets/images/Toronto.jpeg";
  

myCityArr : City[] = [
  new City("Toronto", "Canada", "assets/images/Toronto.jpeg"),
  new City("New York","US", "assets/images/newyork.jpeg"),
  new City("Seattle","US", "assets/images/seattle.jpeg"),
  new City("Tokyo","Japan", "assets/images/tokyo.jpeg"),
  new City("Zaofu","Avatar", "assets/images/zaofu.jpeg")
]
  

 status = true;
 index = 0;
 num = 0;

  next(){
   
    if(this.index <= this.myCityArr.length && this.index >= 0){
      
        this.myCityArr[this.index].city_Name
        this.myCityArr[this.index].country_Name
        this.myCityArr[this.index].image
        this.index++
    }
    
    else if(this.index >= this.myCityArr.length){
      this.index = this.index - this.index

      this.myCityArr[this.index ].city_Name
      this.myCityArr[this.index ].country_Name
      this.myCityArr[this.index ].image
      this.index++
    }
  
  }
    previous(){
    
    if(!isNaN(Number(this.next()))){
      this.num = Number(this.next()) -1 
    }else{
      console.log("Did nnot Work ");
    }
  }
 

  ngOnInit(): void {
  }

}
