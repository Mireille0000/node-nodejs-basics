import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const gzipObj = createGzip();
    const readable = createReadStream('src/zip/files/fileToCompress.txt');
    const writable = createWriteStream('src/zip/files/archive.gz');
    try {
        readable.pipe(gzipObj).pipe(writable);    
    } catch (err) {
        console.log(err);
    }
    // Write your code here 
};

await compress();