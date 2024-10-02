import { access, readFile } from 'node:fs';

const read = async () => {
    const error =  new Error('FS operation failed');
    try {
        access('src/fs/files/fileToRead.txt', (err) => {
            if (err) {
                throw error;
            } else {
                readFile('src/fs/files/fileToRead.txt', 'utf8', (err, content) => {
                    if(err) throw error;
                    console.log(content);
                })
            }
        })
    } catch(err) {
        console.log(err);
    }
};

await read();