
//Treat this class as component     //set of feature
import { Component } from "@angular/core";
@Component(
    {
        selector    : 'Comp-A',
        templateUrl : './compA.component.html',
        styleUrls   : ['./compA.component.css']
    }
)
export class CompAComponent{

     divColor = "green";
     fontColor = 'white';


     isAdmin = false;

     
     
     
     
     btnClick(){
        this.divColor = "red";
        this.fontColor = 'yellow';
     }

}