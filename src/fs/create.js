import { writeFile } from 'node:fs';
import { stat } from 'node:fs';

const create = async () => {
    const pathFresh = 'src/fs/files/fresh.txt';
    const error = new Error('FS operation failed');
    try {
        stat(pathFresh, (_, stats) => {
            if (stats) {
              throw error;
            } else {
                writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            }
        })
    } catch(err) {
        console.log(err);
    }
};

await create();