  /* description: Parses end evaluates mathematical expressions. */

    
%{
    
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
            : WISON '¿' p { $$ = ''; console.log("start"); }
            |error p
            ;
        p
            : LEX '{' ':' t y
            |error t y
            ;

        y   
            : SYNTAX '{' '{' ':' sy
            |error sy
             ;

        t   : er ':' '}'
            ;

        er  : var_re
            ;
        
        var_re  :    var var_re
                    |/*EMPTY*/;

        var : TERMINALINIT TERMINAL '<' '-' expresion_re 
            |error expresion_re;

        expresion_re : expresion ';'
                    |expresion error 
                    ;

        expresion : '(' expresion ')' fer expresion
                    | '[' expresion ']' fer expresion
                    | '('TERMINAL')' expresion
                    | ALLNUMBERS fer expresion
                    | ALLLETTERS fer expresion
                    | RESERVED_WORD expresion
                    | ALFANUM expresion
                    | ;
        fer : '*'
             |'+'
             | '?'
             | /*EMPTY*/;
        
        sy : not_re  ini ':' '}' '}' '?' WISON EOF
            |not_re  ini ':' error EOF
            |not_re  ini ':' '}' error  EOF
            |not_re  ini ':' '}' '}' '?' error EOF
            |not_re  ini ':' '}' '}' error EOF
            |error ':' '}' '}' error EOF
            |error EOF
            ;

        not_re : not not_re
                |error not not_re
                |error vars_re
                ;

        not : NOTERMINALINIT NOTERMINAL ';' ;

        ini : INIT NOTERMINAL ';' vars_re;

        vars_re : vars vars_re
                |/*EMPTY*/
                |error vars_re;

        vars : NOTERMINAL '<' '=' ef ';'
             ;

        ef : proc ef_re 
        ;
        
        ef_re : '|' proc ef_re
            | 
             ;

        proc : proc_re
                |error ef_re;

        proc_re : n proc_re
                | /*EMPTY*/;

        n : TERMINAL
            |NOTERMINAL;








     