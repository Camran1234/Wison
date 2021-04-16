  /* description: Parses end evaluates mathematical expressions. */

    
%{
  console.log("Hero goes the extra code");  
  var SymbolTable = require('./symbolTable').default
  let re = new SymbolTable()
  
%}

%lex
%%
\s+                   /* skip whitespace */
"Syntax"            return ''+'SYNTAX'
"Initial_Sim"       return ''+'INIT'
"No_Terminal"       return ''+'NOTERMINALINIT'
"#".*              /*Ignore */
["/"]["*"][^*]*[*]+([^/*][^*]*["*"]+)*["/"]	/*Ignore */

/*[0-9]+("."[0-9]+)?\b  return ''+'NUMBER'*/
"[aA-zZ]"               return ''+'ALLLETTERS' 
"[0-9]"                 return ''+'ALLNUMBERS'
"{"                   return ''+'{'
"}"                   return ''+'}'
"["                   return ''+'['
"]"                   return ''+']'
"("                   return ''+'('
")"                   return ''+')'
"<"                  return ''+'<'
"="                  return ''+'='
"-"                  return ''+'-'
";"                  return ''+';'
":"                  return ''+':'
"+"                  return ''+'+'
"*"                  return ''+'*'
"?"                  return ''+'?'
"|"                 return ''+'|'

/*Commentary Types*/
        

/*Reserved Word for Lexic Block*/
['][^'\\]+[']           return 'RESERVED_WORD'
"Wison"               return 'WISON'
"Lex"               return 'LEX'
"¿"                   return '¿'
"Terminal"            return 'TERMINALINIT'
"$_"[^ )\s;<-]+             return 'TERMINAL'
"%_"[^ )\s;<-]+            return 'NOTERMINAL'

<<EOF>>               return 'EOF'
.*                  { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); } 

/lex

    %start s

    %%/* language grammar */

        s 
            : WISON '¿' p { console.log("s"+this._$.first_line + " columna: "+ this._$.first_column); }
            |error p {re.addErrorSintactico("Error Sintactico, se esperaba la forma WISON ¿ ..., en "+$1,this._$.first_line,this._$.first_column);}
            ;
        p
            : LEX '{' ':' t y { console.log("p"); }
            |error t y {re.addErrorSintactico("Error Sintactico, se esperaba la forma Lex { : ..., en "+$1,this._$.first_line,this._$.first_column);}
            ;

        y   
            : SYNTAX '{' '{' ':' sy { console.log("y"); }
            |error sy {re.addErrorSintactico("Error Sintactico, se esperaba la forma Syntax { { : ..., en "+$1,this._$.first_line,this._$.first_column);}
             ;

        t   : er ':' '}' { console.log("t"); }
            |er error {re.addErrorSintactico("Error Sintactico, se esperaba la forma : } ..., en "+$2,this._$.last_line,this._$.last_column);}
            ;

        er  : var_re { console.log("er"); }
            ;
        
        var_re  :    var var_re { console.log("var_re"); }
                    |/*EMPTY*/;

        var : TERMINALINIT TERMINAL '<' '-' expresion_re { console.log("var"); re.addTokenTerminal($2); re.addLexemeTerminal($5); re.resetTerminal(); }
            |error expresion_re {re.addErrorSintactico("Error Sintactico, se esperaba la forma Terminal $_Terminal <- .... en "+$1,this._$.first_line,this._$.first_column);}
            ;

        expresion_re : expresion ';' { console.log("expresion_re");}
                    |expresion error {re.addErrorSintactico("Error Sintactico, se esperaba la forma 'REGULAR EXPRESION' ; ... en "+$1,this._$.first_line,this._$.first_column);}
                    ;

        expresion : '(' expresion ')' fer expresion { console.log("1expresion"); $$ = [$1,$2,$3,$4,$5].join(' '); }
                    | '[' expresion ']' fer expresion  { console.log("2expresion"); $$ = [$1,$2,$3,$4,$5].join(' '); }
                    | '('TERMINAL')' expresion { console.log("3expresion"); $$ = [$1,$2,$3,$4].join(' '); }
                    | ALLNUMBERS fer expresion { console.log("4expresion"); $$ = [$1,$2,$3].join(' ');}
                    | ALLLETTERS fer expresion { console.log("5expresion"); $$ = [$1,$2,$3].join(' ');}
                    | RESERVED_WORD expresion { console.log("6expresion"); $$ = [$1,$2].join(' '); }
                    | ALFANUM expresion { console.log("7expresion"); $$ = [$1,$2].join(' '); }
                    | ;
        fer : '*' {$$=$1;}
             |'+' {$$=$1;}
             | '?' {$$=$1;}
             | /*EMPTY*/; 
        
        sy : not_re  ini ':' '}' '}' '?' WISON EOF { console.log("sy"); }
            |not_re  ini ':' error EOF {re.addErrorSintactico("Error Sintactico, se esperaba la forma agregar  }} ? WISON en "+[$3].join(" "),this._$.last_line,this._$.last_column);}
            |not_re  ini ':' '}' error  EOF {re.addErrorSintactico("Error Sintactico, se esperaba la forma agregar :}} ? WISON en "+[$3,$4].join(" "),this._$.last_line,this._$.last_column);}
            |not_re  ini ':' '}' '}' '?' error EOF {re.addErrorSintactico("Error Sintactico, se esperaba la forma agregar ? WISON en "+[$3,$4,$5,$6].join(" "),this._$.last_line,this._$.last_column);}
            |not_re  ini ':' '}' '}' error EOF {re.addErrorSintactico("Error Sintactico, se esperaba la forma agregar ? WISON en "+[$3,$4,$5].join(" "),this._$.last_line,this._$.last_column);}
            |not_re ':' '}' '}' error EOF {re.addErrorSintactico("Error Sintactico, ERROR FATAL NO SE DECLARO Initial_Sim... cerca de: ",this._$.first_line,this._$.first_column);}
            |not_re EOF {re.addErrorSintactico("Error Sintactico, se esperaba la forma :}} ? WISON en "+$1,this._$.last_line,this._$.last_column);}
            ;

        not_re : not not_re { console.log("not_re"); }
                |/*empty*/
                |error not not_re {re.addErrorSintactico("Error Sintactico, se esperaba la forma No_Terminal %_NoTerminal ;... cerca de  "+$1,this._$.first_line,this._$.first_column);}
                ;

        not : NOTERMINALINIT NOTERMINAL ';'  { console.log("not"); re.addNoTerminalDeclarate($2); };

        ini : INIT NOTERMINAL ';' vars_re{ console.log("ini");re.tokenInitialiaze($2); } 
            |error vars_re {re.addErrorSintactico("Error Sintactico, se esperaba la forma INIT NOTERMINAL ';' ... cerca de  "+$1,this._$.first_line,this._$.first_column);}
        ;

        vars_re : vars vars_re { console.log("vars_re"); }
                |/*EMPTY*/ 
                |error vars_re  {re.addErrorSintactico("Error Sintactico, se esperaba la forma NOTERMINAL '<' '='... cerca de  "+$1,this._$.first_line,this._$.first_column);}
        ;

        vars : NOTERMINAL '<' '=' ef ';' { console.log("vars"); re.addProductionName($1); re.resetNoTerminal(); }
            |error vars  {re.addErrorSintactico("Error Sintactico, se esperaba la forma NOTERMINAL '<' '='... cerca de  "+$1,this._$.first_line,this._$.first_column);}
             ;

        ef : proc ef_re { console.log("ef"+$1+$2); re.addNewRule([$1,$2].join(" "));}
        ;
        
        ef_re : '|' proc ef_re { console.log("ef_re"+$2); re.addNewRule($2);}
            | 
             ;

        proc : proc_re { console.log("proc"); $$=$1};

        proc_re : n proc_re { console.log("proc_re"); $$=[$1,$2].join(" "); }
                | /*EMPTY*/;

        n : TERMINAL { console.log("n"); $$=$1;}
            |NOTERMINAL { console.log("n"); $$=$1;};








     