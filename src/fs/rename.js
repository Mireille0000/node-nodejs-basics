import { access } from 'node:fs';
import { rename as renameFs } from 'node:fs';

const rename = async () => {
    const error = new Error('FS operation failed');
    try {
        access('src/fs/files/wrongFilename.txt', (err) => {
            if (err) {
                throw error;
            } else {
                renameFs('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (err) => {
                    if (err) throw err;
                    console.log('Rename complete!');
                })
            }

        })
    } catch(err) {
        console.log(err)
    }
    // Write your code here 
};

await rename();