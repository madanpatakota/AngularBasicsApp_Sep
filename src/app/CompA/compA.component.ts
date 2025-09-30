
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


     colorType = "brown";
     employeeType = "Bad";


      dummyKey = "madan!1234";

      //myPasswordKey = "!223444!!!*88866^&^";

      myPasswordKey = "**************";


      RoleID = 10;   //Adminstartor

      myName = "mohan";



      evtClickMe(element:any , element1:any){
        console.log(element);
        console.log(element1);
      }


//                      0        1      2
Studentnames = ["Ram" , "Sam" , "John"];


Students = [
    {id : 101 , name :"Ram"},
    {id : 201 , name :"Sam"},
    {id : 301 , name :"John"}
];


studnetID  = 100;   //Ram


      ///list of data each value print 

      //foreach , for 


// switch(____)
//    case
//    case



    //  if(true)
    //  {
    //          ////////

    //  }
    //  else {  }

}