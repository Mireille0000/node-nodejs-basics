import { createWriteStream } from 'node:fs';

const write = async () => {
    const writable = createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (data) => writable.write(data));
};

await write();