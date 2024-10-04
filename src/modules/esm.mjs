// const path = require('path');
import { sep, resolve } from 'node:path';
// const { release, version } = require('os');
import { release, version } from 'os';
import * as url from 'url';
// const { createServer: createServerHttp } = require('http');
// import * as http from 'http'; //
import { createServer } from 'node:http2';
// require('./files/c');
import * as fileC from './files/c.js';
// import a from './files/a.json' assert { type: "json" };
// import b from './files/b.json' assert { type: "json" };
// import { readFile } from 'node:fs';
import { createRequire } from 'node:module';

const random = Math.random();

let unknownObject;

const requireMock = createRequire(import.meta.url);

// const countries = loadJSON('./data/countries.json');

if (random > 0.5) {
    // unknownObject = require('./files/a.json');
    const a = requireMock('./files/a.json');
    unknownObject = a;
} else {
    // unknownObject = require('./files/b.json');
    const b = requireMock('./files/b.json');
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

// console.log(`Path to current file is ${__filename}`);
console.log(`Path to current file is ${resolve('esm.mjs')}`);
// console.log(`Path to current directory is ${__dirname}`);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
console.log(`Path to current directory is ${__dirname}`);

// const myServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

// myServer.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//     console.log('To terminate it, use Ctrl+C combination');
// });

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

export { unknownObject, myServer };

