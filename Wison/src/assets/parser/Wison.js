/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Wison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,6],$V2=[1,14],$V3=[2,11],$V4=[1,15],$V5=[1,19],$V6=[1,18],$V7=[1,30],$V8=[1,31],$V9=[1,32],$Va=[2,9],$Vb=[1,44],$Vc=[2,40],$Vd=[1,43],$Ve=[2,12],$Vf=[24,50],$Vg=[2,49],$Vh=[1,58],$Vi=[1,60],$Vj=[1,61],$Vk=[2,22],$Vl=[1,67],$Vm=[1,68],$Vn=[1,69],$Vo=[1,70],$Vp=[1,71],$Vq=[1,72],$Vr=[2,9,43],$Vs=[1,80],$Vt=[1,79],$Vu=[19,24,43,50],$Vv=[2,9,18],$Vw=[24,25,26,28,29,30,31,32,33],$Vx=[2,26],$Vy=[1,90],$Vz=[1,91],$VA=[1,92],$VB=[24,26,29],$VC=[2,9,24,43,50];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"s":3,"WISON":4,"¿":5,"p":6,"LEX":7,"{":8,":":9,"t":10,"y":11,"SYNTAX":12,"sy":13,"er":14,"}":15,"var_re":16,"var":17,"TERMINALINIT":18,"TERMINAL":19,"<":20,"-":21,"expresion_re":22,"expresion":23,";":24,"(":25,")":26,"fer":27,"[":28,"]":29,"ALLNUMBERS":30,"ALLLETTERS":31,"RESERVED_WORD":32,"ALFANUM":33,"*":34,"+":35,"?":36,"not_re":37,"EOF":38,"not":39,"ini":40,"vars_re":41,"NOTERMINALINIT":42,"NOTERMINAL":43,"INIT":44,"vars":45,"=":46,"ef":47,"proc":48,"ef_re":49,"|":50,"proc_re":51,"n":52,"$accept":0,"$end":1},
terminals_: {2:"error",4:"WISON",5:"¿",7:"LEX",8:"{",9:":",12:"SYNTAX",15:"}",18:"TERMINALINIT",19:"TERMINAL",20:"<",21:"-",24:";",25:"(",26:")",28:"[",29:"]",30:"ALLNUMBERS",31:"ALLLETTERS",32:"RESERVED_WORD",33:"ALFANUM",34:"*",35:"+",36:"?",38:"EOF",42:"NOTERMINALINIT",43:"NOTERMINAL",44:"INIT",46:"=",50:"|"},
productions_: [0,[3,3],[3,2],[6,5],[6,3],[11,5],[11,2],[10,3],[14,1],[16,2],[16,2],[16,0],[17,5],[22,2],[22,3],[23,5],[23,5],[23,4],[23,3],[23,3],[23,2],[23,2],[23,0],[27,1],[27,1],[27,1],[27,0],[13,7],[13,3],[13,4],[13,5],[13,7],[13,6],[37,2],[37,1],[37,3],[37,2],[39,3],[40,4],[41,2],[41,0],[45,4],[45,2],[47,2],[49,3],[49,1],[48,1],[48,2],[51,2],[51,0],[52,1],[52,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{2:[1,3],3:1,4:[1,2]},{1:[3]},{5:[1,4]},{2:$V0,6:5,7:$V1},{2:$V0,6:8,7:$V1},{1:[2,2]},{8:[1,9]},{2:$V2,9:$V3,10:10,14:11,16:12,17:13,18:$V4},{1:[2,1]},{9:[1,16]},{2:$V5,11:17,12:$V6},{9:[1,20]},{9:[2,8]},{2:$V2,9:$V3,16:21,17:13,18:$V4},{2:$V2,9:$V3,16:22,17:13,18:$V4},{19:[1,23]},{2:$V2,9:$V3,10:24,14:11,16:12,17:13,18:$V4},{1:[2,4]},{8:[1,25]},{2:$V7,13:26,37:27,39:28,40:29,42:$V8,44:$V9},{15:[1,33]},{9:$Va},{9:[2,10]},{20:[1,34]},{2:$V5,11:35,12:$V6},{8:[1,36]},{1:[2,6]},{2:[1,38],9:[1,37]},{2:$V7,37:39,39:28,40:29,42:$V8,44:$V9},o($Va,[2,34]),{2:$Vb,9:$Vc,39:40,41:41,42:$V8,43:$Vd,45:42},{43:[1,45]},{43:[1,46]},o($Ve,[2,7]),{21:[1,47]},{1:[2,3]},{9:[1,48]},{2:[1,50],15:[1,49]},{38:[1,51]},o($Va,[2,33]),{2:$V7,37:52,39:28,40:29,42:$V8,44:$V9},o($Va,[2,36]),{2:$Vb,9:$Vc,41:53,43:$Vd,45:42},{20:[1,54]},o($Vf,$Vg,{47:55,48:56,51:57,52:59,2:$Vh,19:$Vi,43:$Vj}),{24:[1,62]},{24:[1,63]},{2:[1,66],22:64,23:65,24:$Vk,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq},{2:$V7,13:73,37:27,39:28,40:29,42:$V8,44:$V9},{2:[1,75],15:[1,74]},{38:[1,76]},{1:[2,28]},o($Va,[2,35]),o($Va,[2,39]),{46:[1,77]},o($Vr,[2,42]),{24:$Vs,49:78,50:$Vt},o($Vf,[2,46]),{24:$Vs,49:81,50:$Vt},o($Vf,$Vg,{52:59,51:82,19:$Vi,43:$Vj}),o($Vu,[2,50]),o($Vu,[2,51]),o([2,42,44],[2,37]),{2:$Vb,9:$Vc,41:83,43:$Vd,45:42},o($Vv,$Ve),{24:[1,84]},{23:85,24:$Vk,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq},{19:[1,87],23:86,25:$Vl,26:$Vk,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq},{23:88,25:$Vl,28:$Vm,29:$Vk,30:$Vn,31:$Vo,32:$Vp,33:$Vq},o($Vw,$Vx,{27:89,34:$Vy,35:$Vz,36:$VA}),o($Vw,$Vx,{27:93,34:$Vy,35:$Vz,36:$VA}),o($VB,$Vk,{23:94,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),o($VB,$Vk,{23:95,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),{1:[2,5]},{2:[1,97],36:[1,96]},{38:[1,98]},{1:[2,29]},o($Vf,$Vg,{48:56,51:57,52:59,47:99,2:$Vh,19:$Vi,43:$Vj}),o($Vr,[2,43]),o($Vf,$Vg,{51:57,52:59,48:100,2:$Vh,19:$Vi,43:$Vj}),o($VC,[2,45]),o($Vf,[2,47]),o($Vf,[2,48]),o($Va,[2,38]),o($Vv,[2,13]),{24:[1,101]},{26:[1,102]},{26:[1,103]},{29:[1,104]},o($VB,$Vk,{23:105,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),o($Vw,[2,23]),o($Vw,[2,24]),o($Vw,[2,25]),o($VB,$Vk,{23:106,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),o($VB,[2,20]),o($VB,[2,21]),{2:[1,108],4:[1,107]},{38:[1,109]},{1:[2,30]},o($Vr,[2,41]),{24:$Vs,49:110,50:$Vt},o($Vv,[2,14]),o($Vw,$Vx,{27:111,34:$Vy,35:$Vz,36:$VA}),o($VB,$Vk,{23:112,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),o($Vw,$Vx,{27:113,34:$Vy,35:$Vz,36:$VA}),o($VB,[2,18]),o($VB,[2,19]),{38:[1,114]},{38:[1,115]},{1:[2,32]},o($VC,[2,44]),o($VB,$Vk,{23:116,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),o($VB,[2,17]),o($VB,$Vk,{23:117,25:$Vl,28:$Vm,30:$Vn,31:$Vo,32:$Vp,33:$Vq}),{1:[2,27]},{1:[2,31]},o($VB,[2,15]),o($VB,[2,16])],
defaultActions: {5:[2,2],8:[2,1],12:[2,8],17:[2,4],21:[2,9],22:[2,10],26:[2,6],35:[2,3],51:[2,28],73:[2,5],76:[2,29],98:[2,30],109:[2,32],114:[2,27],115:[2,31]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 12
break;
case 2:return 44
break;
case 3:return 42
break;
case 4:/*Ignore */
break;
case 5:/*Ignore */
break;
case 6:return 31 
break;
case 7:return 30
break;
case 8:return 8
break;
case 9:return 15
break;
case 10:return 28
break;
case 11:return 29
break;
case 12:return 25
break;
case 13:return 26
break;
case 14:return 20
break;
case 15:return 46
break;
case 16:return 21
break;
case 17:return 24
break;
case 18:return 9
break;
case 19:return 35
break;
case 20:return 34
break;
case 21:return 36
break;
case 22:return 50
break;
case 23:return 32
break;
case 24:return 4
break;
case 25:return 7
break;
case 26:return 5
break;
case 27:return 18
break;
case 28:return 19
break;
case 29:return 43
break;
case 30:return 33
break;
case 31:return 38
break;
case 32:return 'ERROR';
break;
}
},
rules: [/^(?:\s+)/,/^(?:Syntax\b)/,/^(?:Initial_Sim\b)/,/^(?:No_Terminal\b)/,/^(?:#.*)/,/^(?:["/"]["*"][^*]*[*]+([^/*][^*]*["*"]+)*["/"])/,/^(?:\[aA-zZ\])/,/^(?:\[0-9\])/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:<)/,/^(?:=)/,/^(?:-)/,/^(?:;)/,/^(?::)/,/^(?:\+)/,/^(?:\*)/,/^(?:\?)/,/^(?:\|)/,/^(?:['][^'\\]+['])/,/^(?:Wison\b)/,/^(?:Lex\b)/,/^(?:¿)/,/^(?:Terminal\b)/,/^(?:\$_[^ )\s;<-]+)/,/^(?:%_[^ )\s;<-]+)/,/^(?:[a-z])/,/^(?:$)/,/^(?:.*)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Wison;
exports.Parser = Wison.Parser;
exports.parse = function () { return Wison.parse.apply(Wison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}