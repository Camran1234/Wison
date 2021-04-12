  /* description: Parses end evaluates mathematical expressions. */

    
%lex
%%
\s+                   /* skip whitespace */
"Syntax"            return 'SYNTAX'
"Initial_Sim"       return 'INIT'
"No_Terminal"       return 'NOTERMINALINIT'
"#".*              /*Ignore */
["/"]["*"][^*]*[*]+([^/*][^*]*["*"]+)*["/"]	/*Ignore */

/*[0-9]+("."[0-9]+)?\b  return 'NUMBER'*/
"[aA-zZ]"               return 'ALLLETTERS'
"[0-9]"                 return 'ALLNUMBERS'
"{"                   return '{'
"}"                   return '}'
"["                   return '['
"]"                   return ']'
"("                   return '('
")"                   return ')'
"<"                  return '<'
"="                  return '='
"-"                  return '-'
";"                  return ';'
":"                  return ':'
"+"                  return '+'
"*"                  return '*'
"?"                  return '?'
"|"                 return '|'

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


/*Reserver Word for Syntax Block*/


<<EOF>>               return 'EOF'

/lex
    %left '('

    %start s

    %%/* language grammar */

        s 
            : WISON '¿' p '?' WISON EOF
            ;
        p
            : LEX '{' ':' t y
            ;

        y   
            : SYNTAX '{' '{' ':' sy ;

        t   : er ':' '}'
            ;

        er  : var_re
            ;
        
        var_re  :   var var_re
                    |/*EMPTY*/;

        var : TERMINALINIT TERMINAL '<' '-' expresion_re ;

        expresion_re : expresion ';';

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
        
        sy : not_re ':' '}' '}' ;

        not_re : not not_re
                |ini;

        not : NOTERMINALINIT NOTERMINAL ';' ;

        ini : INIT NOTERMINAL ';' vars_re;

        vars_re : vars vars_re
                |/*EMPTY*/;

        vars : NOTERMINAL '<' '=' ef;

        ef : proc ef_re;
        
        ef_re : '|' proc ef_re
            | ';' ;

        proc : proc_re;

        proc_re : n proc_re
                | /*EMPTY*/;

        n : TERMINAL
            |NOTERMINAL;








     