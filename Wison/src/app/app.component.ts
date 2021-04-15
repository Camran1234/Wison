import { Component, OnInit, Renderer2, ViewChild,ElementRef } from '@angular/core';

import * as parserWison from '../assets/parser/Wison.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})export class AppComponent implements OnInit {
  

  constructor() {
    
  }
  text: string = '';
  line: string = 'Linea: 1 Column: 0';;
  outPut: string = '';
  
  

  fileUpload(textArea:any) {

    var files = textArea.FileList
    console.log(files)
    // Access the uploaded file through the ElementRef
    //console.log(files)
  }

  ngOnInit() {
  }

  parseWinson(){
    this.outPut = "";
    var parser = parserWison.parser
    parser.parse(this.text)
    var re = parser.returnTable()
    console.log(re);
    //Seeking for errors
    var result = re.checkIfNotDeclareted()
    var result1 = re.checkLeftRecursion()
    var result2 = re.checkFactorize()
    

    if(result!=false && result1!=false && result2!=false && re.haveErrors()==false){
      //Go to parse the gramatic and get the lexemes
      //check if the lexemes and gramatics have the right possesions
      var resultLexic = re.checkLexicLexemes()
      var resultSyntax = re.checkSyntaxRules()
      if(resultLexic == true && resultSyntax==true){
        //Parse Code
      }
    }
    this.outPut = re.getAnswer();
    

    
    // var tokens = parser.getTokensName();
    // var lexemes = parser.getLexemesName();
    // console.log("Tokens: "+tokens.length+" Lexemes: "+lexemes.length);
  }

  // handleFiles(fileArea:any){
  //     var inputElement = fileArea
  //     alert("Jalo")
      
  // }


  getLineNumberAndColumnIndex(textarea:any){
      var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
      var currentLineNumber = textLines.length;
      var currentColumnIndex = textLines[textLines.length-1].length;
      
      this.line = "Linea: "+ currentLineNumber + " Columna: "+currentColumnIndex
   }

   
}
