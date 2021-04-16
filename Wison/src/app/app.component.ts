import { Component, OnInit, Renderer2, ViewChild,ElementRef, ɵgetDebugNode__POST_R3__ } from '@angular/core';
import * as parserWison from '../assets/parser/Wison.js';
import { graphviz }  from 'd3-graphviz';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})export class AppComponent implements OnInit {
  

  constructor() {
    
  }
  asd = new Array()
  text: any = '';
  line: string = 'Linea: 1 Column: 0';;
  lineParser: string = 'Linea 1 Columna 0'
  outPut: string = '';
  readedFile: any = ''
  nameFile: String = ''    
  files: String[]  = new Array("NONE")
  //This is the name of the parser
  parserName:any=''
  entry:any=''
  outPutParser:any=''

  fileUpload(file:any) {
    console.log(file)
    let reader = new FileReader()
    reader.readAsText(file.target.files[0])
    let text:any
    reader.onload = ((data) => {
      console.log(data.target?.result)
      this.text = data.target?.result
    })
    // Access the uploaded file through the ElementRef
    //console.log(files)
  }

  ngOnInit() {
    }

  async parseGrammar(){
    var parseName = this.parserName
    var entry = this.entry
    var re = parserWison.parser.returnTable()
    var answer = await re.parseEntry(entry,parseName)
    this.outPutParser = answer
    var code = re.getTree()
    console.log("RE: "+code)
    
      //graphviz("#tree").renderDot(code);
    
  }


  
  parseWinson(){
    try {
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
          //re.createParser()
          var code = re.createCode()
          /*var blob = new Blob([code], {type: "text/plain;charset=utf-8"});
          saveAs(blob, "windigo.jison");*/
          re.createParser(code,this.nameFile)
          this.files = re.getParsers()
          //delete this
        }
      }
      this.outPut = re.getAnswer();
      this.outPut += "Debug Complete\n"
      re.reset()
    } catch (error) {
      console.error(error)
    }
    
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

   getLineNumberAndColumnParser(textarea:any){
    var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
    var currentLineNumber = textLines.length;
    var currentColumnIndex = textLines[textLines.length-1].length;
    
    this.lineParser = "Linea: "+ currentLineNumber + " Columna: "+currentColumnIndex
 }

   
}
function d3() {
  throw new Error('Function not implemented.');
}

