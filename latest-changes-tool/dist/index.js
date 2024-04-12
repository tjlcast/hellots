"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
function findLatestFiles(dir, count) {
    var files = fs.readdirSync(dir).map(function (file) { return path.join(dir, file); });
    var sortedFiles = files.sort(function (a, b) {
        var statA = fs.statSync(a);
        var statB = fs.statSync(b);
        return statB.mtimeMs - statA.mtimeMs;
    });
    return sortedFiles.slice(0, count);
}
var directory = process.argv[2] || './'; // 默认为当前目录
var numberOfFiles = parseInt(process.argv[3]) || 3; // 默认为3个文件
var latestFiles = findLatestFiles(directory, numberOfFiles);
console.log("\u6700\u65B0\u7684 ".concat(numberOfFiles, " \u4E2A\u6587\u4EF6\uFF1A"));
latestFiles.forEach(function (file) { return console.log(file); });
