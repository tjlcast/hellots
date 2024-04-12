grammar JavaFunction;

function: 'public' type ID '(' parameters ')' '{' body '}' ;

type: ID ;

parameters: (parameter (',' parameter)*)? ;

parameter: type ID ;

body: 'return' expression ';' ;

expression: ID ;
ID: [a-zA-Z]+ ;
WS: [ \t\r\n]+ -> skip ;
