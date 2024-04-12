import * as fs from 'fs';
import * as path from 'path';

function findLatestFiles(dir: string, count: number): string[] {
    const files = fs.readdirSync(dir).map(file => path.join(dir, file));
    const sortedFiles = files.sort((a, b) => {
        const statA = fs.statSync(a);
        const statB = fs.statSync(b);
        return statB.mtimeMs - statA.mtimeMs;
    });

    return sortedFiles.slice(0, count);
}

const directory = process.argv[2] || './'; // 默认为当前目录
const numberOfFiles = parseInt(process.argv[3]) || 3; // 默认为3个文件

const latestFiles = findLatestFiles(directory, numberOfFiles);
console.log(`最新的 ${numberOfFiles} 个文件：`);
latestFiles.forEach(file => console.log(file));
