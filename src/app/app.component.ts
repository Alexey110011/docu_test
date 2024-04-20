import { Component, OnInit } from '@angular/core';
import * as allIcons from '@fortawesome/free-solid-svg-icons'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import { findIconDefinition, IconDefinition, icon, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'docu_test';
  allIcons = allIcons                //Assigning all Awesome Fonts library to variable "allIcons"
  faCoffee:IconDefinition = faCoffee //Default icon
  iconNamesArray:string[]=[]     
  title_icon:string = 'coffee'       //Empty array for filling with icon names
  counter = 0
  makeIconArray = ()=>{              //Method which fill empty "iconNamesArray" with icon names
    for (let prop in this.allIcons){
      this.iconNamesArray.push(prop)
      console.log("This iconNamesArray",this.iconNamesArray)
    }
  } 
  delayTwo(icons:any){
    setTimeout(() => {
      this.showIcon(icons)
    }, 2000);
  }
   showIcon(icons:any){
     this.counter++
     let randomNumber = Math.floor(Math.random()*this.iconNamesArray.length) //Choose random index in iconNamesArray
     let randomIcon = this.iconNamesArray[randomNumber]                      //Choose random icon name by above index
     let i = findIconDefinition({prefix:'fas',iconName:icons[`${randomIcon}`].iconName})
     let newIcon =  icon(i)
     this.faCoffee = newIcon
     this.title_icon = newIcon.iconName
    }
    constructor(){} 
        ngOnInit():void {                                                    //Calling function  creating array of icon names
           this.makeIconArray() 
      }
}
