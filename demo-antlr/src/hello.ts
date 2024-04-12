import * as antlr4 from 'antlr4ts';
import { JavaFunctionLexer } from './generated/JavaFunctionLexer';
import { JavaFunctionParser, FunctionContext } from './generated/JavaFunctionParser';
import { ParameterContext, TypeContext } from './generated/JavaFunctionParser';

class TypeInfo {
    type: string;
    line: number;
    column: number;

    constructor(type: string, line: number, column: number) {
        this.type = type;
        this.line = line;
        this.column = column;
    }
}

class ParamInfo extends TypeInfo {
    name: string;
    
    constructor(name: string, type: string, line: number, column: number) {
        super(type, line, column);
        this.name = name;
    }
}

class ReturnInfo extends TypeInfo {
}

function parseJavaRFunction(javaFunction: string): ReturnInfo {
    // parse type info.
    const input = antlr4.CharStreams.fromString(javaFunction);
    const lexer = new JavaFunctionLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaFunctionParser(tokens);

    const tree = parser.function() as FunctionContext;

    const returnType = tree.type().text;
    const line = tree.type().start.line;
    const column = tree.type().start.charPositionInLine;

    const returnInfo = new ReturnInfo(returnType, line, column);
    return returnInfo;
}

function parseJavaPFunction(javaFunction: string): ParamInfo[] {
    // parse type info.
    const input = antlr4.CharStreams.fromString(javaFunction);
    const lexer = new JavaFunctionLexer(input);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaFunctionParser(tokens);

    const tree = parser.function() as FunctionContext;

    const parameters = tree.parameters().parameter();
    // 提取参数类型
    const parameterTypes = extractParameterTypes(parameters);
    return parameterTypes;
}

function extractParameterTypes(parameters: ParameterContext[]): ParamInfo[] {
    return parameters.map((param) => {
      const typeContext = param.type();
      const nameStr = param.ID().text;
      const typeStr = typeContext.ID().text;
      const line = typeContext.start.line;
      const column = typeContext.start.charPositionInLine;
      return new ParamInfo(nameStr, typeStr, line, column);
    });
  }


// 示例用法
const javaFunctionString = `




public int add(int a, int b) {
    return a + b;
}
`;

const returnInfo = parseJavaRFunction(javaFunctionString);
const paramInfo = parseJavaPFunction(javaFunctionString);
console.log(`Return type "${returnInfo.type}" found at line${returnInfo.line}, column ${returnInfo.column}`);
console.log(paramInfo);

