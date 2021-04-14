import { Component, OnInit } from '@angular/core';

import * as parserWison from '../assets/parser/Wison.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})export class AppComponent implements OnInit {
  constructor() { }

  text: string = '';
  line: string = 'Linea: 1 Column: 0';;
  outPut: string = '';

  ngOnInit() {
  }

  parseWinson(){
    var parser = parserWison
    console.log("Code to parse")
    
    parser.parse(this.text)
    
  }

  getLineNumberAndColumnIndex(textarea:any){
      var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
      var currentLineNumber = textLines.length;
      var currentColumnIndex = textLines[textLines.length-1].length;
      
      this.line = "Linea: "+ currentLineNumber + " Columna: "+currentColumnIndex
   }

   
}
