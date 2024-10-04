import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    const getHash = (path) => new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const readable = createReadStream(path);
        readable.on('error', reject);
        readable.on('data', (dataChunk) => hash.update(dataChunk));
        readable.on('end', () => resolve(hash.digest('hex')));
       })
    try {
        const hash = await getHash('src/hash/files/fileToCalculateHashFor.txt');
        console.log(hash);
      } catch (err) {
        console.log(err);
      }
};

await calculateHash();