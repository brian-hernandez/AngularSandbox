import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Brian";
  public myId = "testId"; // Property to showcase Property Binding
  public successClass = 'text-success'; // Property to showcase Class Binding
  public hasError = true; // Property to showcase alt-syntax for Class Binding
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
      "text-danger" : this.hasError,
      "text-special" : this.isSpecial
  }
  public highlightColor = "green";

  public titleStlyes = {
    color : "blue",
      fontStyle : "italic"
  }

  public greeting = "";
  public myName = "";

  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = "Brian";
  }

  logMessage(value) {
    console.log(value);
  }


  greetUser(){
    return "Hello " + this.name;
  }

}