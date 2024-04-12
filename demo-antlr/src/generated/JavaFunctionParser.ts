// Generated from ./JavaFunction.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaFunctionVisitor } from "./JavaFunctionVisitor";


export class JavaFunctionParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ID = 9;
	public static readonly WS = 10;
	public static readonly RULE_function = 0;
	public static readonly RULE_type = 1;
	public static readonly RULE_parameters = 2;
	public static readonly RULE_parameter = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_expression = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"function", "type", "parameters", "parameter", "body", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'public'", "'('", "')'", "'{'", "'}'", "','", "'return'", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaFunctionParser._LITERAL_NAMES, JavaFunctionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaFunctionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavaFunction.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaFunctionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaFunctionParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaFunctionParser._ATN, this);
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaFunctionParser.RULE_function);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.match(JavaFunctionParser.T__0);
			this.state = 13;
			this.type();
			this.state = 14;
			this.match(JavaFunctionParser.ID);
			this.state = 15;
			this.match(JavaFunctionParser.T__1);
			this.state = 16;
			this.parameters();
			this.state = 17;
			this.match(JavaFunctionParser.T__2);
			this.state = 18;
			this.match(JavaFunctionParser.T__3);
			this.state = 19;
			this.body();
			this.state = 20;
			this.match(JavaFunctionParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaFunctionParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(JavaFunctionParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaFunctionParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaFunctionParser.ID) {
				{
				this.state = 24;
				this.parameter();
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaFunctionParser.T__5) {
					{
					{
					this.state = 25;
					this.match(JavaFunctionParser.T__5);
					this.state = 26;
					this.parameter();
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaFunctionParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.type();
			this.state = 35;
			this.match(JavaFunctionParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaFunctionParser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(JavaFunctionParser.T__6);
			this.state = 38;
			this.expression();
			this.state = 39;
			this.match(JavaFunctionParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaFunctionParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(JavaFunctionParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f.\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04\x1E\n\x04" +
		"\f\x04\x0E\x04!\v\x04\x05\x04#\n\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02)\x02\x0E\x03\x02\x02\x02\x04" +
		"\x18\x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b$\x03\x02\x02\x02\n\'\x03" +
		"\x02\x02\x02\f+\x03\x02\x02\x02\x0E\x0F\x07\x03\x02\x02\x0F\x10\x05\x04" +
		"\x03\x02\x10\x11\x07\v\x02\x02\x11\x12\x07\x04\x02\x02\x12\x13\x05\x06" +
		"\x04\x02\x13\x14\x07\x05\x02\x02\x14\x15\x07\x06\x02\x02\x15\x16\x05\n" +
		"\x06\x02\x16\x17\x07\x07\x02\x02\x17\x03\x03\x02\x02\x02\x18\x19\x07\v" +
		"\x02\x02\x19\x05\x03\x02\x02\x02\x1A\x1F\x05\b\x05\x02\x1B\x1C\x07\b\x02" +
		"\x02\x1C\x1E\x05\b\x05\x02\x1D\x1B\x03\x02\x02\x02\x1E!\x03\x02\x02\x02" +
		"\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03" +
		"\x02\x02\x02\"\x1A\x03\x02\x02\x02\"#\x03\x02\x02\x02#\x07\x03\x02\x02" +
		"\x02$%\x05\x04\x03\x02%&\x07\v\x02\x02&\t\x03\x02\x02\x02\'(\x07\t\x02" +
		"\x02()\x05\f\x07\x02)*\x07\n\x02\x02*\v\x03\x02\x02\x02+,\x07\v\x02\x02" +
		",\r\x03\x02\x02\x02\x04\x1F\"";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaFunctionParser.__ATN) {
			JavaFunctionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaFunctionParser._serializedATN));
		}

		return JavaFunctionParser.__ATN;
	}

}

export class FunctionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(JavaFunctionParser.ID, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_function; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(JavaFunctionParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_type; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_parameters; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(JavaFunctionParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_parameter; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_body; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(JavaFunctionParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaFunctionParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: JavaFunctionVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


