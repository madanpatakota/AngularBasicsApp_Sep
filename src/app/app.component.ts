import { Component } from '@angular/core';

@Component({
  selector: 'app-root-madan',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //String interpolation
   subjectName:string = "Angular";
   title:string      = "Basic App"
   getCustomerName():string{
        return "Robert.Jr";
   }
   getManagerDetails():string{
    return "John from UK";
   }

   //Propery Data binding
   customerRole = "Admin";
   inputtype = "text";
   linkName = "https://misardacademy.com/courses/courses-main/angular-training";
   imagesource = "https://misard.com/assets/img/madan.png";
   //inputtype = "checkbox";


  evtClick(){
      console.log("Button Fired!!!!");
  }


  evt2Clikc(){
    console.log("Hello World!!!!");
  }


  evtMouseOver(){
    console.log("Your cursor move to the paragraph  !!!!");
  }

  evtMouseOver_1(testVAlue:string){
    console.log(testVAlue);
  }

 evtMouseOver_2(eventDetails:MouseEvent){
   // console.log(eventDetails);
    // let a:unknown = "madan";
    // let name = a as string
     let paragraph = eventDetails.target as HTMLParagraphElement;
     window.alert(paragraph.innerText);   //Third Paragraph

   // i want to get the text of the paragraph       //Third Paragraph

    //alert message

    //i understand target is paragraph element 


  }


  evtKeyEvent(eventDetails:KeyboardEvent){
    //console.log(eventDetails);
    let input = eventDetails.target as HTMLInputElement;
    console.log(input.value);
  }






}
