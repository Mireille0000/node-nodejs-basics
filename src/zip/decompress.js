import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const unzipObj = createUnzip();
    const readable = createReadStream('src/zip/files/archive.gz');
    const writable = createWriteStream('src/zip/files/fileToCompress2.txt');
    try {
        console.log('hey?');
        readable.pipe(unzipObj).pipe(writable); 
    } catch (err) {
        console.log(err);
    }
    // Write your code here 
};

await decompress();