  /* description: Parses end evaluates mathematical expressions. */

    
%{
  console.log("Hero goes the extra code");  
  import symbolTable from '../parser/symbolTable'
  let re = new re();
  
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
"\"[a-z]                return 'ALFANUM'

<<EOF>>               return 'EOF'
.                  return 'INVALID'; 

/lex

    %start s

    %%/* language grammar */

        s 
            : WISON '¿' p { console.log("s"); }
            |error p
            ;
        p
            : LEX '{' ':' t y { console.log("p"); }
            |error t y
            ;

        y   
            : SYNTAX '{' '{' ':' sy { console.log("y"); }
            |error sy
             ;

        t   : er ':' '}' { console.log("t"); }
            ;

        er  : var_re { console.log("er"); }
            ;
        
        var_re  :    var var_re { console.log("var_re"); }
                    |/*EMPTY*/;

        var : TERMINALINIT TERMINAL '<' '-' expresion_re { console.log("var"); re.addTokenTerminal($2); re.addLexemeTerminal($5); re.resetTerminal(); }
            |error expresion_re;

        expresion_re : expresion ';' { console.log("expresion_re");}
                    |expresion error 
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
            |not_re  ini ':' error EOF
            |not_re  ini ':' '}' error  EOF
            |not_re  ini ':' '}' '}' '?' error EOF
            |not_re  ini ':' '}' '}' error EOF
            |error ':' '}' '}' error EOF
            |error EOF
            ;

        not_re : not not_re { console.log("not_re"); }
                |error not not_re
                |error vars_re
                ;

        not : NOTERMINALINIT NOTERMINAL ';'  { console.log("not"); re.addNoTerminalDeclarate($2); };

        ini : INIT NOTERMINAL ';' vars_re{ console.log("ini"); } ;

        vars_re : vars vars_re { console.log("vars_re"); }
                |/*EMPTY*/ 
                |error vars_re;

        vars : NOTERMINAL '<' '=' ef ';' { console.log("vars"); re.addProductionName($1); re.resetNoTerminal(); }
             ;

        ef : proc ef_re { console.log("ef"); re.addNewRule($1);}
        ;
        
        ef_re : '|' proc ef_re { console.log("ef_re"); re.addNewRule($2);}
            | 
             ;

        proc : proc_re { console.log("proc"); }
                |error ef_re;

        proc_re : n proc_re { console.log("proc_re"); }
                | /*EMPTY*/;

        n : TERMINAL { console.log("n"); $$=$1;}
            |NOTERMINAL { console.log("n"); $$=$1;};








     