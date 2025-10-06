import { Component, ContentChild, 
  ElementRef, TemplateRef, ViewChild, 
  ViewContainerRef} from '@angular/core';



//ngcontent  , elementref , viewchild and contentchild
@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {


  // ViewChild   --   what is the type here (string)

  //let                  name: string = "Madan";


  // ViewChild   --   what is the type here (ElementRef)
  @ViewChild('paragraph') p1 : ElementRef;
  @ViewChild('spanName')  s1 : ElementRef;
  @ViewChild('firstName')  firstName : ElementRef;

  @ContentChild('jobTitle')  jobTitle : ElementRef;


  btnClick(){

// Wht is the type 
// Element ref

// what kind of type
// object

// what are the members here 
// nativeElement


    //whats your nativeplace ? KD
    console.log(this.p1.nativeElement.innerText);    //p
    console.log(this.s1.nativeElement.innerText);   //span
   
   // console.log(this.firstName.nativeElement);   //span

    console.log(this.firstName.nativeElement.value);
    console.log(this.jobTitle.nativeElement.value);

  }


  @ViewChild('testTemplate')  template1    : TemplateRef<any>;
  
  @ViewChild('containerRef' , { read:ViewContainerRef })  containerRef : ViewContainerRef;
  @ViewChild('containerRef')                                 v1 : ViewContainerRef;  // v1 is the element
  
  
  btnClickme(){
     //console.log(this.containerRef);
     this.containerRef.
     insert(this.template1.createEmbeddedView({"Firstname":"John" , "lastname" : "smith" , "Hometown" : "UK"}));
    // console.log(this.v1);
     //type 
     //console.log(this.template1);
  }



}
