// Generated from ./JavaFunction.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class JavaFunctionLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "ID", 
		"WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'public'", "'('", "')'", "'{'", "'}'", "','", "'return'", 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaFunctionLexer._LITERAL_NAMES, JavaFunctionLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaFunctionLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(JavaFunctionLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "JavaFunction.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaFunctionLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaFunctionLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return JavaFunctionLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return JavaFunctionLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\f=\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\n\x06\n3\n\n\r\n\x0E\n4\x03\v\x06\v8\n" +
		"\v\r\v\x0E\v9\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x03\x02\x04\x04\x02C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02>\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x03\x17\x03\x02\x02\x02\x05\x1E\x03\x02\x02\x02\x07 \x03\x02\x02" +
		"\x02\t\"\x03\x02\x02\x02\v$\x03\x02\x02\x02\r&\x03\x02\x02\x02\x0F(\x03" +
		"\x02\x02\x02\x11/\x03\x02\x02\x02\x132\x03\x02\x02\x02\x157\x03\x02\x02" +
		"\x02\x17\x18\x07r\x02\x02\x18\x19\x07w\x02\x02\x19\x1A\x07d\x02\x02\x1A" +
		"\x1B\x07n\x02\x02\x1B\x1C\x07k\x02\x02\x1C\x1D\x07e\x02\x02\x1D\x04\x03" +
		"\x02\x02\x02\x1E\x1F\x07*\x02\x02\x1F\x06\x03\x02\x02\x02 !\x07+\x02\x02" +
		"!\b\x03\x02\x02\x02\"#\x07}\x02\x02#\n\x03\x02\x02\x02$%\x07\x7F\x02\x02" +
		"%\f\x03\x02\x02\x02&\'\x07.\x02\x02\'\x0E\x03\x02\x02\x02()\x07t\x02\x02" +
		")*\x07g\x02\x02*+\x07v\x02\x02+,\x07w\x02\x02,-\x07t\x02\x02-.\x07p\x02" +
		"\x02.\x10\x03\x02\x02\x02/0\x07=\x02\x020\x12\x03\x02\x02\x0213\t\x02" +
		"\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02" +
		"\x02\x025\x14\x03\x02\x02\x0268\t\x03\x02\x0276\x03\x02\x02\x0289\x03" +
		"\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\b" +
		"\v\x02\x02<\x16\x03\x02\x02\x02\x05\x0249\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaFunctionLexer.__ATN) {
			JavaFunctionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaFunctionLexer._serializedATN));
		}

		return JavaFunctionLexer.__ATN;
	}

}

