import { createReadStream } from 'node:fs';

const read = async () => {
    const readable = createReadStream('src/streams/files/fileToRead.txt');
    readable.on('data', (chunk) => {
        process.stdout.write(chunk + '\n');
    });
};

await read();